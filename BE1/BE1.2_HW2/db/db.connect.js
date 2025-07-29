const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const initializeDatabase = async () => {
    await mongoose
        .connect(mongoUri)
        .then(() => {
            console.log("connected to Database Successfully.")
        })
        .catch((error) => {
            console.log("Error Connecting to Database", error);
        })
}

module.exports = {initializeDatabase};