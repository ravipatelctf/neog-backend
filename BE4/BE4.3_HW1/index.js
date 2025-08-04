const {initializeDatabase} = require("./db/db.config");
const Restaurant = require("./models/restaurant.models");

require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

initializeDatabase();

/*
1. Create an API with route "/restaurants/:restaurantId" to delete a restaurant data by their ID in the Database. Test your API with Postman.

*/

async function deleteRestaurantById(restaurantId) {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
        return deletedRestaurant;
    } catch (error) {
        throw error;
    }
};

app.delete("/restaurants/:restaurantId", async (req, res) => {
    try {
        const deletedRestaurant = await deleteRestaurantById(req.params.restaurantId);
        if (deletedRestaurant) {
            res
                .status(200)
                .json({message: "Restaurant deleted successfully."});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to delete restaurant data!"});
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
