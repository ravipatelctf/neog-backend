
const express = require("express");
const app = express();

const {initializeDatabase} = require("./db/db.connect");
const Movie = require("./models/movie.models");

app.use(express.json());

initializeDatabase();

// -----------------------------1------------------------------------

async function readMovieByTitle(movieTitle) {
    try {
        const movie = await Movie.findOne({title: movieTitle});
        return movie;
    } catch (error) {
        throw error;
    }
}


app.get("/movies/:title", async (req, res) => {
    try {
        const movie = await readMovieByTitle(req.params.title);
        if (movie) {
            res.json(movie);
        } else {
            res
                .status(404)
                .json({error: "Movie Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch movie!"});
    }
});


// ----------------------------2--------------------------------------

async function readAllMovies() {
    try {
        const allMovies = await Movie.find();
        return allMovies;
    } catch (error) {
        throw error;
    }
}


app.get("/movies", async (req, res) => {
    try {
        const movies = await readAllMovies();
        if(movies.length != 0) {
            res.send(movies);
        } else {
            res
                .status(404)
                .json({error: "Movies Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch movie!"});
    }
});

// -----------------------------3-------------------------------------

async function readMovieByDirector(director) {
    try {
        const movieByDirector = await Movie.find({director});
        return movieByDirector;
    } catch (error) {
        throw error;
    }
}


app.get("/movies/director/:director", async (req, res) => {
    try {
        const movies = await readMovieByDirector(req.params.director);
        if (movies.length != 0) {
            res.send(movies);
        } else {
            res
                .status(404)
                .json({error: "Movie Not Found!"})
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch movie!"});
    }
});

// ------------------------------------------------------------------

async function readMovieByGenre(genre) {
    try {
        const moviesByGenre = await Movie.find({genre});
        return moviesByGenre;
    } catch (error) {
        throw error;
    }
}

app.get("/movies/genre/:genre", async (req, res) => {
    try {
        const movies = await readMovieByGenre(req.params.genre);
        if(movies.length != 0) {
            res.send(movies);
        } else {
            res
                .status(404)
                .json({error: "Movies Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch movie!"});
    }
});

// ------------------------------------------------------------------

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});