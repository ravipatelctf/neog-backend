const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const initializeDatabase = async () => {
    await mongoose
        .connect(mongoUri)
        .then(() => {
            console.log("Connected to Database Successfully");
        })
        .catch((error) => {
            console.log("Error connecting to database", error);
        })
};

module.exports = {initializeDatabase};

