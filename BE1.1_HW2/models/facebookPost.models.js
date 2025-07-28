const mongoose = require("mongoose");

const facebookPostRecipe = new mongoose.Schema({
    fullname: String,
    profilePicUrl: String,
    bio: String,
    postPicUrl: String,
    likesCount: Number,
    commentsCount: Number,
    sharesCount: Number,
});

const FacebookPost = mongoose.model("FacebookPost", facebookPostRecipe);

module.exports = FacebookPost;