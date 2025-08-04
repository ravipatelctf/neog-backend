const {initializeDatabase} = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

initializeDatabase();

/*
1. Create a function that accepts a hotel ID and an object with updated data, and updates the hotel data with the provided ID. Take the _id of the hotel from your database which has the name Lake View and update its checkOutTime to 11 AM. Console the updated hotel.

*/


const updateHotelCheckOutTime = async (hotelId, dataToUpdate) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {new: true});
        console.log(updatedHotel);
    } catch (error) {
        throw error;
    }
};

updateHotelCheckOutTime("6888c4295994d325ccf2cfb0", {checkOutTime: "11:00 AM"});


/*
2. Create a function that accepts a hotel name and an object with updated data, and updates the hotel data. Take the hotel which has the name "Sunset Resort" and update its rating to 4.2. Console the updated hotel.

*/


const updateHotelRating = async (name, dataToUpdate) => {
    try {
        const updatedHotel = await Hotel.findOneAndUpdate({name}, dataToUpdate, {new: true});
        console.log(updatedHotel);
    } catch (error) {
        throw error;
    }
};

updateHotelRating("Sunset Resort", {rating: 4.2});


/*
3. Create a function that accepts a hotel's phone number and an object with updated data, and updates the hotel data. Take the hotel which has the phone number "+1299655890" and update its phone number  to "+1997687392". Console the updated hotel details.

*/


const updateHotelPhoneNumber = async (phoneNumber, dataToUpdate) => {
    try {
        const updatedHotel = await Hotel.findOneAndUpdate({phoneNumber}, dataToUpdate, {new: true});
        console.log(updatedHotel);
    } catch (error) {
        throw error;
    }
};

updateHotelPhoneNumber("+1299655890", {phoneNumber: "+1997687392"});