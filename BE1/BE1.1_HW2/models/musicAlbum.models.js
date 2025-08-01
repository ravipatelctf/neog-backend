const mongoose = require("mongoose");

const musicAlbumRecipe = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        enum: ["Rock", "Pop", "Hip-Hop", "Jazz", "Classical", "Country", "Electronic", "R&B", "Reggae", "Indie"],
    },
    releaseYear: Number,
    recordLabel: String,
    format: String,
    isExplicit: {
        type: Boolean,
        default: false,
    },
    isAvailableOnStreaming: {
        type: Boolean,
        default: false,
    },
    isFeatured: {
        type: Boolean,
        default: true,
    },
},
{
    timestamps: true,
},
);

const MusicAlbum = mongoose.model("MusicAlbum", musicAlbumRecipe);

module.exports = MusicAlbum;