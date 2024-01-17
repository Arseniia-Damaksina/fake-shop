import dbConnection from "./dbConnection.js";

// Create the database connection
export const dbConnect = () => {
    dbConnection.connect((err) => {
        if (err) {
          console.error("failed to connect", err.stack);
          dbConnection.end();
        } else {
          console.log("DB connected");
        }
      });
};

// Close the database connection
export const dbConnectEnd = () => {
  dbConnection.end((err) => {
    if (err) {
      console.error('Error closing the database connection:', err);
      return;
    }
    console.log('Database connection closed');
  });
}