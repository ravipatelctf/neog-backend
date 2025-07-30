const {initializeDatabase} = require("./db/db.config");
const Restaurant = require("./models/restaurant.models");

initializeDatabase();

/*
1. Create a function deleteRestaurantById that accepts a restaurant ID and deletes the restaurant data from the db. Take any restaurant id from your database and delete the records of that restaurant.

*/

async function deleteRestaurantById(restaurantId) {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
        console.log("This Restaurant data was deleted:", deletedRestaurant);
    } catch (error) {
        throw error;
    }
};

deleteRestaurantById("6888b538306c4802bab7e3f9");


/*
2. Create a function deleteRestaurantByName that accepts a restaurant name and deletes the restaurant data from the db. Take any restaurant name from your database and delete the records of that restaurant.

*/


async function deleteRestaurantByName(restaurantName) {
    try {
        const deletedRestaurant = await Restaurant.findOneAndDelete({name: restaurantName});
        console.log("This restaurant was deleted:", deletedRestaurant);
    } catch (error) {
        throw error;
    }
};

deleteRestaurantByName("Yo China");