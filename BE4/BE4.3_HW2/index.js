const {initializeDatabase} = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

initializeDatabase();

/*
1. Create a function deleteHotelById that accepts a hotel ID and deletes the hotel data from the db. Take any hotel id from your database and delete the records of that hotel.
*/

async function deleteHotelById(hotelId) {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(hotelId);
        console.log("This hotel data was deleted:", deletedHotel);
    } catch (error) {
        throw error;
    }
};

deleteHotelById("68888cb0033864b01b06893c");


/*
2. Create a function deleteHotelByPhoneNumber that accepts a hotel's phone number and deletes the hotel data from the db. Take any hotel phone number from your database and delete the records of that hotel.
*/


async function deleteHotelByPhoneNumber(phoneNumber) {
    try {
        const deletedHotel = await Hotel.findOneAndDelete({phoneNumber});
        console.log("This hotel data was deleted:", deletedHotel);
    } catch (error) {
        throw error;
    }
};

deleteHotelByPhoneNumber("+1997687392");