const {initializeDatabase} = require("./db/db.config");
const Restaurant = require("./models/restaurant.models");


const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

initializeDatabase();

/*
1. Create an API with route "/restaurants" to create a new restaurant data in the Database. Test your API with Postman.

*/

async function createRestaurant(newRestaurant) {
    try {
        const restaurant = new Restaurant(newRestaurant);
        const saveRestaurant = await restaurant.save();
        return saveRestaurant;
    } catch (error) {
        throw error;
    }
}

app.post("/restaurants", async (req, res) => {
    try {
        const savedRestaurant = await createRestaurant(req.body);
        res
            .status(201)
            .json({message: "Restaurant added successfully.", restaurant: savedRestaurant});
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to add a new restaurant data!"})
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});