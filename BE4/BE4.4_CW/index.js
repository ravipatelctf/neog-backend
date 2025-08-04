const {initializeDatabase} = require("./db/db.connect");
const Movie = require("./models/movie.models");

require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

initializeDatabase();

// find a movie by id and update it's rating

async function updateMovie(movieId, dataToUpdate) {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {new: true});
        return updatedMovie;
    } catch (error) {
        throw error;
    }
}

app.post("/movies/:movieId", async (req, res) => {
    try {
        const updatedMovie = await updateMovie(req.params.movieId, req.body);
        if(updatedMovie) {
            res
                .status(200)
                .json({message: "Movie updated successfully.", updatedMovie: updatedMovie});
        } else {
            res
                .status(404)
                .json({error: "Movie Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to update movie!"});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});