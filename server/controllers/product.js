import util from "util";
import dbConnection from "../config/dbConnection.js";

// Promisify the query
const promisifiedQuery = util.promisify(dbConnection.query).bind(dbConnection);

const productControllers = {
  getProducts: async (req, res) => {
    const products = await promisifiedQuery("SELECT * FROM products");
    res.status(200).json({ products: products });
  },
  addProduct: async (req, res) => {
    const { category, name, price, img, user_id } = req.body;

    if (!category || !name || !price || !img || !user_id) {
      res
        .status(402)
        .json({ success: false, message: "All fields are required" });
    } else {
      try {
        const query =
          "INSERT INTO products (category, name, price, img, user_id) VALUES (?, ?, ?, ?, ?)";
        const values = [category, name, parseInt(price, 10), img, user_id];
        await promisifiedQuery(query, values);
        res.status(201).json({
          success: true,
          message: `A product: ${name} is added succesfully`,
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  updateProduct: (req, res) => {
    const { category, name, price, img } = req.body;
    const id = req.params.id;

    if (!category || !name || !price || !img) {
      res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    } else {
      const query =
        "UPDATE products SET category=?, name=?, price=?, img=? WHERE id=?";
      const values = [category, name, parseInt(price, 10), img, id];

      dbConnection.query(query, values, (err, result) => {
        if (err) {
          res.status(404).json({
            success: false,
            message: "The product with this id does not exist",
          });
        }
        res.status(200).json({
          success: true,
          message: `The product ${name} is updated successfully`,
        });
      });
    }
  },
  deleteProduct: (req, res) => {
    const query = "DELETE FROM products WHERE id = ?";
    const id = req.params.id;

    dbConnection.query(query, id, (err, result) => {
      if (err) {
        res.status(404).json({
          success: false,
          message: `The product with this id does not exist`,
        });
        return;
      }
      res.status(200).json({
        success: true,
        message: `The product is deleted successfully`,
      });
    });
  },
};

export default productControllers;
