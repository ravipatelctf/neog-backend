const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json())
/*
1. Write a GET route "/" which sends a message "Hello, Express server.". Test your API with Postman.

*/
app.get("/", (req, res) => {
    res.send("Hello, Express server.");
});

/*
2. Write a DELETE route which deletes a movie with id 5, from the pre-defined movies array. Send an error message, "Movie not found." in case any movie is not found.

Pre-defined movies array:

*/
const movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
  { id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 }
];

app.delete("/movies/:id", (req, res) => {
    const movieId = parseInt(req.params.id);
    const index = movies.findIndex(movie => movie.id === movieId);

    if(index === -1) {
        res.status(400).json({error: "Movie Not Found!"});
    } else {
        movies.splice(index, 1);
        res.status(200).json
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});