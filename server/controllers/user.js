import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import util from "util";

import dbConnection from "../config/dbConnection.js";
import validateEmail from "../utils/validateEmail.js";
import validatePassword from "../utils/validatePassword.js";
import hashPassword from "../utils/hashPassword.js";
import matchPasswords from "../utils/matchPasswords.js";

// Promisify the query
const promisifiedQuery = util.promisify(dbConnection.query).bind(dbConnection);

const userControllers = {
  register: async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    try {
      // check if user with this email exists
      const results = await promisifiedQuery(
        "SELECT * FROM users where email = ?",
        [email]
      );
      const userExists = results[0];
      if (!userExists) {
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const isMatch = matchPasswords(password, confirmPassword);

        if (isEmailValid && isPasswordValid && isMatch) {
          // hash the password
          const hashedPassword = hashPassword(password);
          await promisifiedQuery(
            "INSERT INTO users (email, password) VALUES (?, ?)",
            [email, hashedPassword]
          );
          res.status(201).json({
            success: true,
            message: `A user with email ${email} is created`,
          });
        } else {
          res.status(409).json({
            success: false,
            message: "The email or password is not correct",
          });
        }
      } else {
        res
          .status(409)
          .json({ success: false, message: "The email already exists" });
      }
    } catch (err) {
      console.log(err);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const results = await promisifiedQuery(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      if (!results[0]) {
        res
          .status(409)
          .json({ success: false, message: "No account with this email" });
      } else {
        // check the password
        bcrypt.compare(password, results[0].password, (err, isValid) => {
          if (isValid) {
            const token = jwt.sign(
              { user: results[0] },
              process.env.TOKEN_SECRET
            );
            res.cookie("id", results[0].id, {
              secure: true,
              sameSite: "None",
            });
            res.cookie("token", token, {
              httpOnly: true,
              secure: true,
              sameSite: "None",
            });
            res
              .status(200)
              .json({ success: true, token: token, id: results[0].id });
          } else {
            res
              .status(400)
              .json({ success: false, message: "Incorrect email or password" });
          }
        });
      }
    } catch (error) {
      console.log(error);
    } 
  },
  logout: (req, res) => {
    res.clearCookie("token");
    res.clearCookie("id");
    res.status(200).json({ success: true, message: "The user is logged out" });
  },
};

export default userControllers;
