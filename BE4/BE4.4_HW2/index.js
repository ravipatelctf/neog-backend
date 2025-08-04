const {initializeDatabase} = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

initializeDatabase();

/*
1. Create an API to update a hotel data by their ID in the Database. Update the rating of an existing hotel. Test your API with Postman.

*/
const updateHotelRating = async (hotelId, dataToUpdate) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {new: true});
        return updatedHotel;
    } catch (error) {
        throw error;
    }
};

app.post("/hotels/:hotelId", async (req, res) => {
    try {
        const updatedHotel = await updateHotelRating(req.params.hotelId, req.body);
        if(updatedHotel) {
            res
                .status(200)
                .json({message: "Hotel updated successfully.", updatedHotel: updatedHotel});
        } else {
            res
                .status(404)
                .json({error: "Hotel Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to update hotel!"});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});