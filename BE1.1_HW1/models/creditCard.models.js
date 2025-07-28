const mongoose = require("mongoose");

const creditCardSchema = new mongoose.Schema({
    cardNumber: Number,
    expiryDate: String,
    cardHolderName: String,
});

const CreditCard = mongoose.model("CreditCard", creditCardSchema);

module.exports = CreditCard;