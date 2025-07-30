const {initializeDatabase} = require("./db/db.connect");
const Movie = require("./models/movie.models");

initializeDatabase();

// find a movie by id and update it's rating

async function updateMovie(movieId, dataToUpdate) {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {new: true});
        console.log(updatedMovie);
    } catch (error) {
        throw error;
    }
}

updateMovie("68877437a14be9c50c542b00", {rating: 8.0});

// find one data and update its value

async function updateMovieDetail(movieTitle, dataToUpdate) {
    try {
        const updatedMovie = await Movie.findOneAndUpdate({title: movieTitle}, dataToUpdate, {new: true});
        console.log(updatedMovie);
    } catch (error) {
        throw error;
    }
}

updateMovieDetail("Kabhi Khushi Kabhie Gham", {releaseYear: 2001});