import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = mysql.createConnection({
    user :  process.env.DB_USER,
    host : 'localhost',
    port : process.env.DB_PORT,
    database : process.env.DB_DATABASE,
    password : process.env.DB_PASSWORD
});

export default dbConnection;