const {initializeDatabase} = require("./db/db.connect");
const Movie = require("./models/movie.models");

require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

initializeDatabase();

// find a movie by id and delete it from the database

async function deleteMovie(movieId) {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(movieId);
        return deletedMovie;
    } catch (error) {
        throw error;
    }
};

app.delete("/movies/:movieId", async(req, res) => {
    try {
        const deletedMovie = await deleteMovie(req.params.movieId);
        if(deletedMovie) {
            res
                .status(200)
                .json({message: "Movie deleted successfully."});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to delete movie!"});    
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});