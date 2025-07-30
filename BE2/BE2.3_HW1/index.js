const {initializeDatabase} = require("./db/db.config");
const Restaurant = require("./models/restaurant.models");

initializeDatabase();

/*
1. Create a function that accepts a restaurant ID and an object with updated data, and updates the restaurant with the provided ID. Take the _id of the restaurant which has the name Yo China and update its rating from 3.9 to 4.1. Console the updated restaurant.
*/

const updateRestaurantRating = async (restaurantId, dataToUpdate) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, dataToUpdate, {new: true});
        console.log(updatedRestaurant);
    } catch (error) {
        throw error;
    }
};

updateRestaurantRating("6888b6ff2df6c12fab93d115", {rating: 4.1});


/*
2. Create a function that accepts a restaurant name and an object with updated data, and updates the restaurant. Take the restaurant which has the name "Somi" and update its name from "Somi" to "Som Sarovar". Console the updated restaurant.
*/

const updateRestaurantName = async (restaurantName, dataToUpdate) => {
    try {
        const updatedRestaurant = await Restaurant.findOneAndUpdate({name: restaurantName}, dataToUpdate, {new: true});
        console.log(updatedRestaurant);
    } catch (error) {
        throw error;
    }
}

updateRestaurantName("Somi", {name: "Som Sarovar"});


/*
3. Create a function that accepts a restaurant's phone number and an object with updated data, and updates the restaurant. Take the restaurant which has the phone number "+1288997392" and update isDeliveryAvailable option to true. Console the updated restaurant.
*/

const updateRestaurantDelivery = async (phoneNumber, dataToUpdate) => {
    try {
        const updatedRestaurant = await Restaurant.findOneAndUpdate({phoneNumber}, dataToUpdate, {new: true});
        console.log(updatedRestaurant);
    } catch (error) {
        throw error;
    }
};

updateRestaurantDelivery("+1288997392", {isDeliveryAvailable: true});