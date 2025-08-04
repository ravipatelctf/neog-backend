const {initializeDatabase} = require("./db/db.config");
const Hotel = require("./models/hotel.models");

const express = require("express");
const app = express();

app.use(express.json());

initializeDatabase();

// ------------------------------------1--------------------------------------
/*
1. Create an API with route "/hotels" to read all hotels from the Database. Test your API with Postman.

*/
async function readAllHotels() {
    try {
        const allHotels = await Hotel.find();
        return allHotels;
    } catch (error) {
        throw error;
    }
}

app.get("/hotels", async (req, res) => {
    try {
        const hotels = await readAllHotels();
        if (hotels.length != 0) {
            res
                .status(200)
                .send(hotels);
        } else {
            res
                .status(404)
                .json({error: "Hotel Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Error fetching hotels data!"});
    }
});

// ------------------------------------2--------------------------------------
/*
2. Create an API with route "/hotels/:hotelName" to read a hotel by its name. Test your API with Postman.

*/
async function readByHotelName(hotelName) {
    try {
        const hotel = await Hotel.findOne({name: hotelName});
        return hotel;
    } catch (error) {
        throw error;
    }
}

app.get("/hotels/:hotelName", async (req, res) => {
    try {
        const hotel = await readByHotelName(req.params.hotelName);
        if (hotel) {
            res
                .status(200)
                .send(hotel);
        } else {
            res
                .status(404)
                .json({error: "Hotel Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Error fetching hotel data!"});
    }
})



// ------------------------------------3--------------------------------------
/*
3. Create an API with route "/hotels/directory/:phoneNumber" to read a hotel by phone number. Test your API with Postman.

*/
async function readByPhoneNumber(phoneNumber) {
    try {
        const hotel = await Hotel.findOne({phoneNumber: phoneNumber});
        return hotel;
    } catch (error) {
        throw error;
    }
}

app.get("/hotels/directory/:phoneNumber", async (req, res) => {
    try {
        const hotel = await readByPhoneNumber(req.params.phoneNumber);
        if (hotel) {
            res
                .status(200)
                .send(hotel);
        } else {
            res
                .status(404)
                .json({error: "Hotel Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Error fetching hotel data!"});
    }
})

// ------------------------------------4--------------------------------------
/*
4. Create an API with route "/hotels/rating/:hotelRating" to read all hotels by rating. Test your API with Postman.

*/
async function readByRating(rating) {
    try {
        const hotel = await Hotel.findOne({rating: rating});
        return hotel;
    } catch (error) {
        throw error;
    }
}

app.get("/hotels/rating/:hotelRating", async (req, res) => {
    try {
        const hotel = await readByRating(req.params.hotelRating);
        if (hotel) {
            res
                .status(200)
                .send(hotel);
        } else {
            res
                .status(404)
                .json({error: "Hotel Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Error fetching hotel data!"});
    }
})

// ------------------------------------5--------------------------------------
/*
5. Create an API with route "/hotels/category/:hotelCategory" to read all hotels by category. Test your API with Postman.

*/
async function readByCategory(category) {
    try {
        const hotels = await Hotel.find({category: category});
        return hotels;
    } catch (error) {
        throw error;
    }
}

app.get("/hotels/category/:hotelCategory", async (req, res) => {
    try {
        const hotels = await readByCategory(req.params.hotelCategory);
        if (hotels.length != 0) {
            res
                .status(200)
                .send(hotels);
        } else {
            res
                .status(404)
                .json({error: "Hotel Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Error fetching hotel data!"});
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});