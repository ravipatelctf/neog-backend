const {initializeDatabase} = require("./db/db.config");
const Restaurant = require("./models/restaurant.models");

require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

initializeDatabase();

/*
1. Create an API to update a restaurant data by their ID in the Database. Update the cuisine of an existing restaurant. Test your API with Postman.

*/

const updateRestaurantById = async (restaurantId, dataToUpdate) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, dataToUpdate, {new: true});
        return updatedRestaurant;
    } catch (error) {
        throw error;
    }
};

app.post("/restaurants/:restaurantId", async (req, res) => {
    try {
        const updatedRestaurant = await updateRestaurantById(req.params.restaurantId, req.body);
        if(updatedRestaurant) {
            res
                .status(200)
                .json({message: "Restaurant updated successfully.", updatedRestaurant: updatedRestaurant});
        } else {
            res
                .status(404)
                .json({error: "Restaurant Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to update restaurant!"});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});