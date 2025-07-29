const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    fullName: String,
    username: {
        type: String,
        required: true,
    },
    bio: String,
    profilePicUrl: String,
    followingCount: Number,
    followerCount: Number,
    companyName: String,
    location: String,
    portfolioUrl: String,
},
{
    timestamps: true,
},
);

const Profile = mongoose.model("UserProfile", profileSchema);

module.exports = Profile;