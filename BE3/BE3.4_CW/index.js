const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const cars = [{id: 1, make: "Toyota", model: "Camery", year: 2022}];

app.post("/cars/:id", (req, res) => {
    const carId = parseInt(req.params.id);
    const updatedCarData = req.body;
    const carToUpdate = cars.find(car => car.id === carId);

    if(!carToUpdate) {
        res
            .status(404)
            .json({error: "Car Not Found!"});
    } else {
        if(!updatedCarData.id || !updatedCarData.make || !updatedCarData.model || !updatedCarData.year) {
            res
                .status(400)
                .json({error: "id, make, model and year are required"});
        } else {
            Object.assign(carToUpdate, updatedCarData);
            res
                .status(200)
                .json({message: "Car Data Updated Successfully.", car: carToUpdate});
        }
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});