const {initializeDatabase} = require("./db/db.connect");
const Movie = require("./models/movie.models");

const express = require("express");
const app = express();
app.use(express.json());

initializeDatabase();           

async function createMovie(newMovie) {
    try {
        const movie = new Movie(newMovie);
        const saveMovie = await movie.save();
        return saveMovie;
    } catch (error) {
        throw error;
    }
}

app.post("/movies", async (req, res) => {
    try {
        const savedMovie = await createMovie(req.body);
        res
            .status(201)
            .json({message: "Movie added successfully.", movie: savedMovie});
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to create movie!"});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
