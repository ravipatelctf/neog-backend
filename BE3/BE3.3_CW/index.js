const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

const cars = [{id: 1, make: "Toyota", model: "Camery", year: 2022}];

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.get("/cars", (req, res) => {
    res.send(cars);
});

app.delete("/cars/:id", (req, res) => {
    const carId = parseInt(req.params.id);
    const index = cars.findIndex(car => car.id === carId);
    
    if(index === -1) {
        res.status(400).json({error: "Car not found"});
    } else {
        cars.splice(index, 1);
        res.status(200).json({message: "Car deleted Successfully."});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
});