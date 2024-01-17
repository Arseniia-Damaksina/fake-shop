import { Router } from "express";

import userControllers from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/register", userControllers.register);
userRouter.post("/login", userControllers.login);
userRouter.get("/logout", userControllers.logout);


export default userRouter;
