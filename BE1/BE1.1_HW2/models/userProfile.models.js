const mongoose = require("mongoose");

const userProfileRecipe = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    birthdate: Date,
    isActive: {
        type: Boolean,
        default: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    profilePictureUrl: String,
},
{
    timestamps: true,
},
);

const UserProfile = mongoose.model("UserProfile", userProfileRecipe);

module.exports = UserProfile;