const {initializeDatabase} = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

initializeDatabase();

/*
1. Create an API with route "/hotels/:hotelId" to delete a hotel data by their ID in the Database. Test your API with Postman.

*/

async function deleteHotelById(hotelId) {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(hotelId);
        return deletedHotel;
    } catch (error) {
        throw error;
    }
};

app.delete("/hotels/:hotelId", async (req, res) => {
    try {
        const deletedHotel = await deleteHotelById(req.params.hotelId);
        if (deletedHotel) {
            res
                .status(200)
                .json({message: "Hotel deleted successfully."});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to delete hotel data!"});
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});