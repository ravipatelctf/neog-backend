const mongoose = require("mongoose");

const productCard2Schema = new mongoose.Schema({
    productName: String,
    productImageUrl: String,
    productDesciption: String,
    productPrice: Number,
    discountPercentage: Number,
    isDeliveryFree: Boolean,
    isWifiAvailable: Boolean,
    isPriceLowestSinceLaunch: Boolean,
    productQuantity: Number,
    isProductFlipkartAssured: Boolean,
    warrantyPeriod: Number,
    rating: Number,
    ratingCount: Number,
    reviewsCount: Number,
},
{
    timestamps: true,
}
);

const ProductCard2 = mongoose.model("ProductCard2", productCard2Schema);

module.exports = ProductCard2;