const {initializeDatabase} = require("./db/db.connect");
const Movie = require("./models/movie.models");

initializeDatabase();

const newMovie = {
    title: "Movie 1",
    releaseYear: 2025,
    genre: ["Romance"],
    director: "Director 1",
    actors: ["Actor 1", "Actor 2"],
    language: "Hindi",
    country: "India",
    rating: 8.1,
    plot: "lorem ipsump plot lorem ipsump plot",
    awards: "IFA Filmfare Awards",
    posterUrl: "https://example.com/new-poster1.jpg",
    trailerUrl: "https://example.com/new-trailer1.mp4",
  };

  async function createMovie(newMovie) {
    try {
        const movie = new Movie(newMovie);
        const saveMovie = await movie.save();
        console.log("New Movie Data:", saveMovie);
    } catch (error) {
        throw error;
    }
  }

  createMovie(newMovie);