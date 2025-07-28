const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    employeeId: String,
    name: String,
    profileImageUrl: String,
    designation: String,
    dateOfBirth: String,
    email: String,
    telephoneNumber: Number,
    address: String,
},
{
    timestamps: true,
},
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;