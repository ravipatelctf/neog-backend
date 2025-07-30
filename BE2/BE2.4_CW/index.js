const {initializeDatabase} = require("./db/db.connect");
const Movie = require("./models/movie.models");

initializeDatabase();

// find a movie by id and delete it from the database

async function deleteMovie(movieId) {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(movieId);
        console.log("This movie was deleted:", deletedMovie);
    } catch (error) {
        throw error;
    }
};

deleteMovie("68886287a373e7ce206e3852");

// find a movie by its title and delete it from database

async function deleteMovieByTitle(movieTitle) {
    try {
        const deletedMovie = await Movie.findOneAndDelete({title: movieTitle});
        console.log("This movie was deleted:", deletedMovie);
    } catch (error) {
        throw error;
    }
};

deleteMovieByTitle("3 Idiots");