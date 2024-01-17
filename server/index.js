import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { dbConnect } from "./config/dbConnect.js";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";

// configure dotenv
dotenv.config();
const PORT = process.env.PORT || 3005;

// db connection
dbConnect();

// initialize express
const app = express();

// cors
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true
    })
);

// parse body and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// use routes
app.use(userRouter);
app.use(productRouter);

// handle 404
app.use('*', (req, res) => {
    res.status(404).json({message: 'Page is not found'});
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port : ${PORT}`);
});
