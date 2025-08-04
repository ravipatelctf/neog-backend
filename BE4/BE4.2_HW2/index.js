const {initializeDatabase} = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

initializeDatabase();

/*
1. Create an API with route "/hotels" to create a new hotel data in the Database. Test your API with Postman.

*/
async function createHotel(newHotel) {
    try {
        const hotel = new Hotel(newHotel);
        const saveHotel = await hotel.save();
        return saveHotel;
    } catch (error) {
        throw error;
    }
};

app.post("/hotels", async (req, res) => {
    try {
        const savedHotel = await createHotel(req.body);
        res
            .status(201)
            .json({message: "Hotel data added successfully.", hotel: savedHotel});
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to add new hotel!"});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});