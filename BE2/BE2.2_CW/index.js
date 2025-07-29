const {initializeDatabase} = require("./db/db.connect");
const Movie = require("./models/movie.models");

initializeDatabase();

// find a movie with a particular
async function readMovieByTitle(movieTitle) {
    try {
        const movie = await Movie.findOne({title: movieTitle});
        console.log(movie);
    } catch (error) {
        throw error;
    }
}

readMovieByTitle("Gully Boy");

// to get all the movies in the database
async function readAllMovies() {
    try {
        const allMovies = await Movie.find();
        console.log(allMovies);
    } catch (error) {
        throw error;
    }
}

readAllMovies();

// get movie by director name
async function readMovieByDirector(directorName) {
    try {
        const movieByDirector = await Movie.find({director: directorName});
        console.log(movieByDirector);
    } catch (error) {
        throw error;
    }
}

readMovieByDirector("Rajkumar Hirani");

