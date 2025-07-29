const mongoose = require("mongoose");

const fruitCardSchema = new mongoose.Schema({
    fruitName: String,
    fruitImageUrl: String,
    fruitDescription: String,
    caloriesInFruit: Number,
    carbohydratesInFruit: Number,
    proteinInFruit: Number,
    unsaturatedFatInFruit: Number,
    isLiked: Boolean,
},
{
    timestamps: true,
},
);

const FruitCard = mongoose.model("FruitCard", fruitCardSchema);

module.exports = FruitCard;
