const {initializeDatabase} = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

initializeDatabase();

/*
1. Write a function to create a new hotel data given below.
*/

const newHotel = {
  name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
};

const createHotel = async (newHotel) => {
    try {
        const hotel = new Hotel(newHotel);
        const saveHotel = await hotel.save();
        console.log("New Hotel:", saveHotel);
    } catch (error) {
        throw error;
    }
};

createHotel(newHotel);


/*
2. Run the same function to create another hotel data in the database.
*/

const newHotel2 = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
};

createHotel(newHotel2);


/*
3. Create a function to read all hotels from the database. Console all the hotels. Use proper function and variable names.
*/

const readAllHotels = async () => {
    try {
        const hotels = await Hotel.find();
        console.log(hotels);
    } catch (error) {
        throw error;
    }
};

readAllHotels();


/*
4. Create a function to read a hotel by its name ("Lake View"). Console the restaurant details of Lake View hotel. Use proper function and variable names.
*/

const readByName = async (name) => {
    try {
        const hotels = await Hotel.findOne({name});
        console.log(hotels);
    } catch (error) {
        throw error;
    }
};

readByName("Lake View");


/*
5. Create a function to read all hotels which offers parking space. Console all the hotel details.
*/

const readByParking = async (isParkingAvailable) => {
    try {
        const hotels = await Hotel.find({isParkingAvailable: true});
        console.log(hotels);
    } catch (error) {
        throw error;
    }
};

readByParking(true);


/*
6. Create a function to read all hotels which has restaurant available. Console all the hotels.
*/

const readByRestaurantAvailibility = async (isRestaurantAvailable) => {
    try {
        const hotels = await Hotel.find({isRestaurantAvailable: true});
        console.log(hotels);
    } catch (error) {
        throw error;
    }
};

readByRestaurantAvailibility(true);


/*
7. Create a function to read all hotels by category ("Mid-Range"). Console all the mid range hotels.
*/

const readByCategory = async (category) => {
    try {
        const hotels = await Hotel.find({category: category});
        console.log(hotels);
    } catch (error) {
        throw error;
    }
};

readByCategory("Mid-Range");


/*
8. Create a function to read all hotels by price range ("$$$$ (61+)"). Console all the hotels.
*/

const readByPriceRange = async (priceRange) => {
    try {
        const hotels = await Hotel.find({priceRange});
        console.log(hotels);
    } catch (error) {
        throw error;
    }
};

readByPriceRange("$$$$ (61+)");


/*
9. Create a function to read all hotels with 4.0 rating. Console the hotels.
*/

const readByRating = async (rating) => {
    try {
        const hotels = await Hotel.find({rating});
        console.log(hotels);
    } catch (error) {
        throw error;
    }
}

readByRating(4.0);


/*
10. Create a function to read a hotel by phone number ("+1299655890"). Console the hotel data.
*/

const readAHotelByPhoneNumber = async (phoneNumber) => {
    try {
        const hotels = await Hotel.findOne({phoneNumber});
        console.log(hotels);
    } catch (error) {
        throw error;
    }
};

readAHotelByPhoneNumber("+1299655890")