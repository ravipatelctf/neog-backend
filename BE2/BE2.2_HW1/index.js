const {initializeDatabase} = require("./db/db.config");
const Restaurant = require("./models/restaurant.models");

initializeDatabase();

/*
1. Write a function to create a new restaurant data given below.
*/

const newRestaurant = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
};

async function createRestaurant(newRestaurant) {
    try {
        const restaurant = new Restaurant(newRestaurant);
        const saveRestaurant = await restaurant.save();
        console.log("New Restaurant:", saveRestaurant);
    } catch (error) {
        throw error;
    }
}

createRestaurant(newRestaurant)

/*
2. Run the same function to create another restaurant data in the database.
*/

const newRestaurant2 = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
};

createRestaurant(newRestaurant2)

/*
3. Create a function to read all restaurants from the database. Console all the restaurants. Use proper function and variable names.
*/

const readAllRestaurants = async () => {
    try {
        const allRestaurants = await Restaurant.find();
        console.log(allRestaurants);
    } catch (error) {
        throw error;
    }
}

readAllRestaurants();

/*
4. Create a function to read a restaurant by its name ("New Restaurant"). Console the restaurant details. Use proper function and variable names.
*/

const readByName = async (restaurantName) => {
    try {
        const restaurant = await Restaurant.findOne({name: restaurantName});
        console.log(restaurant);
    } catch (error) {
        throw error;
    }
}

readByName("New Restaurant"); // output: null

/*
5. Create a function to read all restaurants which offers reservations. Console the restaurant details.
*/

const readByReservations = async (reservationsNeeded) => {
    try {
        const restaurants = await Restaurant.find({reservationsNeeded: true});
        console.log(restaurants);
    } catch (error) {
        throw error;
    }
}

readByReservations(true);

/*
6. Create a function to read all restaurants which offers delivery. Console the restaurant details.
*/

const readByDelivery = async (isDeliveryAvailable) => {
    try {
        const restaurants = await Restaurant.find({isDeliveryAvailable: true});
        console.log(restaurants);
    } catch (error) {
        throw error;
    }
}

readByDelivery(true);

/*
7. Create a function to read a restaurant by phone number (+1288997392). Console the restaurant details.
*/

const readByPhoneNumber = async (phoneNumber) => {
    try {
        const restaurant = await Restaurant.findOne({phoneNumber: phoneNumber});
        console.log(restaurant);
    } catch (error) {
        throw error;
    }
};

readByPhoneNumber("+1288997392");

/*
8. Create a function to read all restaurants by cuisine ("Italian"). Console all the restaurants with Italian cuisine.
*/

const readByCuisine = async (cuisine) => {
    try {
        const restaurants = await Restaurant.find({cuisine});
        console.log(restaurants);
    } catch (error) {
        throw error;
    }
};

readByCuisine("Italian");
