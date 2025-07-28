const mongoose = require("mongoose");

const recipeCardSchema = new mongoose.Schema({
    name: String,
    tagline: String,
    sevings: Number,
    preparingTime: Number,
    cookingTime: Number,
    ingedients: [{
        type: String,
    }],
    directions: String,
    notes: String,
});

const RecipeCard = mongoose.model("RecipeCard", recipeCardSchema);

module.exports = RecipeCard;