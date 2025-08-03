const {initializeDatabase} = require("./db/db.config");
const Restaurant = require("./models/restaurant.models");

const express = require("express");
const app = express();

app.use(express.json());

initializeDatabase();

// ------------------------------------1--------------------------------------
/*
1. Create an API with route "/restaurants" to read all restaurants from the Database. Test your API with Postman.

*/
async function readAllRestaurants() {
    try {
        const allRestaurants = await Restaurant.find();
        return allRestaurants;
    } catch (error) {
        throw error;
    }
}

app.get("/restaurants", async (req, res) => {
    try {
        const restaurants = await readAllRestaurants();
        if (restaurants.length != 0) {
            res
                .status(200)
                .send(restaurants);
        } else {
            res
                .status(404)
                .json({error: "Restaurant Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Error fetching restaurant data!"});
    }
});

// ------------------------------------2--------------------------------------
/*
2. Create an API with route "/restaurants/:restaurantName" to read a restaurant by its name. Test your API with Postman.

*/
async function readByRestaurantName(restaurantName) {
    try {
        const restaurant = await Restaurant.findOne({name: restaurantName});
        return restaurant;
    } catch (error) {
        throw error;
    }
}

app.get("/restaurants/:restaurantName", async (req, res) => {
    try {
        const restaurant = await readByRestaurantName(req.params.restaurantName);
        if (restaurant) {
            res
                .status(200)
                .send(restaurant);
        } else {
            res
                .status(404)
                .json({error: "Restaurant Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Error fetching restaurants data!"});
    }
})



// ------------------------------------3--------------------------------------
/*
3. Create an API with route "/restaurants/directory/:phoneNumber" to read a restaurant by phone number. Test your API with Postman.

*/
async function readByPhoneNumber(phoneNumber) {
    try {
        const restaurant = await Restaurant.findOne({phoneNumber: phoneNumber});
        return restaurant;
    } catch (error) {
        throw error;
    }
}

app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
    try {
        const restaurant = await readByPhoneNumber(req.params.phoneNumber);
        if (restaurant) {
            res
                .status(200)
                .send(restaurant);
        } else {
            res
                .status(404)
                .json({error: "Restaurant Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Error fetching restaurants data!"});
    }
})

// ------------------------------------4--------------------------------------
/*
4. Create an API with route "/restaurants/cuisine/:cuisineName" to read all restaurants by cuisine. Test your API with Postman.

*/
async function readByCuisine(cuisineName) {
    try {
        const restaurant = await Restaurant.findOne({cuisine: cuisineName});
        return restaurant;
    } catch (error) {
        throw error;
    }
}

app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
    try {
        const restaurant = await readByCuisine(req.params.cuisineName);
        if (restaurant) {
            res
                .status(200)
                .send(restaurant);
        } else {
            res
                .status(404)
                .json({error: "Restaurant Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Error fetching restaurants data!"});
    }
})

// ------------------------------------5--------------------------------------
/*
5. Create an API with route "/restaurants/location/:restaurantLocation" to read all restaurants by location. Test your API with Postman.

*/
async function readAllRestaurantsByLocation(restaurantLocation) {
    try {
        const allRestaurants = await Restaurant.find({location: restaurantLocation});
        return allRestaurants;
    } catch (error) {
        throw error;
    }
}

app.get("/restaurants/location/:restaurantLocation", async (req, res) => {
    try {
        const restaurants = await readAllRestaurantsByLocation(req.params.restaurantLocation);
        if (restaurants.length != 0) {
            res
                .status(200)
                .send(restaurants);
        } else {
            res
                .status(404)
                .json({error: "Restaurant Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Error fetching restaurant data!"});
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});