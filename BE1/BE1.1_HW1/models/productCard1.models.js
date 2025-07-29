const mongoose = require("mongoose");

const poductCard1Schema = new mongoose.Schema({
    productName: String,
    productImageUrl: String,
    isProductNew: Boolean,
    productInfo: String,
    productColor: {
        type: String,
        enum: ["blue", "red", "green", "orange", "gray"],
        default: "orange",
    },
    productSize: {
        type: Number,
        enum: [7, 8, 9, 10, 11],
        default: 9,
    },
    productPrice: Number,
},
{
    timestamps: true,
},
);

const ProductCard1 = mongoose.model("ProductCard1", poductCard1Schema);

module.exports = ProductCard1;