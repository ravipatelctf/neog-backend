const mongoose = require("mongoose");

const productCardSchema = new mongoose.Schema({
    productName: String,
    productImageUrl: String,
    productPrice: Number,
    productDiscountPecentage: Number,
    availableOffers: [{
        type: String,
    }],
    brandName: {
        type: String,
    },
    warrantyPeriod: {
        type: Object,
    },
    isWifiAvailable: {
        type: Boolean,
    },
    rating: Number,
    ratingsCount: Number,
    reviewsCount: Number,
    variant: String,
});

const ProductCard = mongoose.model("ProductCard", productCardSchema);

module.exports = ProductCard;