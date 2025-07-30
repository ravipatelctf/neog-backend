const {initializeDatabase} = require("./db/db.connect");
const Car = require("./models/car.models");

initializeDatabase();


/*
1. Write a function to create a new car data given below.

*/

const carData = {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg"
  ]
};

const createCar = async (carData) => {
    try {
        const car = new Car(carData);
        const saveCar = await car.save();
        console.log(saveCar);
    } catch (error) {
        throw error;
    }
};

createCar(carData);

/*
2. Run the same function to create another car data in the database.

*/

const carData2 = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
};

createCar(carData2);

/*
3. Create a function to read all cars from the database. Console all the cars. Use proper function and variable names.

*/

const readAllCars = async () => {
    try {
        const cars = await Car.find();
        console.log(cars);
    } catch (error) {
        throw error;
    }
};

readAllCars();


/*
4. Create a function to read cars by brand ("Ford"). Console the car details. Use proper function and variable names.

*/

const readCarsByBrand = async (brand) => {
    try {
        const cars = await Car.find({brand});
        console.log(cars);
    } catch (error) {
        throw error;
    }
};

readCarsByBrand("Ford");


/*
5. Create a function to read cars by color ("Black"). Console the car details. Use proper function and variable names.

*/

const readCarsByColor = async (color) => {
    try {
        const cars = await Car.find({color});
        console.log(cars);
    } catch (error) {
        throw error;
    }
};

readCarsByColor("Black");


/*
6. Create a function to update the price of a car with model "Corolla". Update the price to 2300000. Console the car with updated price.

*/

const updateCarModel = async (model, dataToUpdate) => {
    try {
        const updatedCar = await Car.findOneAndUpdate({model}, dataToUpdate, {new: true});
        console.log("This Car data was updated:", updatedCar);
    } catch (error) {
        throw error;
    }
};

updateCarModel("Corolla", {price: 2300000});


/*
7. Create a function to update the condition of a car with model "Model S". Update the condition to "Used". Console the car with updated condition.

*/

const updateCarCondition = async (model, dataToUpdate) => {
    try {
        const updatedCar = await Car.findOneAndUpdate({model}, dataToUpdate, {new: true});
        console.log("This Car data was updated:", updatedCar);
    } catch (error) {
        throw error;
    }
};

updateCarCondition("Model S", {condition: "Used"});



/*
8. Create a function to delete a car by ID. Take the id of the car brand Tesla from the database and delete that car record. Console the deleted car data.

*/

const deleteCarById = async (carId) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(carId);
        console.log("This car data was deleted:", deletedCar);
    } catch (error) {
        throw error;
    }
};

deleteCarById("6888566b1e1167d18715af2c");


/*
9. Create a function to delete a car by its body style. Delete the car data with body style "Coupe" from the database console the deleted car data.

*/

const deleteCarByBodyStyle = async (bodyStyle) => {
    try {
        const deletedCar = await Car.findOneAndDelete({bodyStyle});
        console.log("This car data was deleted:", deletedCar);
    } catch (error) {
        throw error;
    }
};

deleteCarByBodyStyle("Coupe");