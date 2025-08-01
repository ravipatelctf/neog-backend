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
        res.status(200).json({message: "Movie deleted successfully."});
    }
});

/*
3. Write a GET route "/movies" which sends the movies array in response. Test your API with Postman.

*/
app.get("/movies", (req, res) => {
    res.send(movies);
});

/*
4. Write a DELETE route which deletes an item with id 2, from the pre-defined items array. Send an error message, "Item not found." in case any item is not found.

Pre-defined items array:

*/
const items = [
    { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},
    { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 },
    { id: 3, itemName: 'Plate', color: 'Off-White', quantity: 6 }
];

app.delete("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const index = items.findIndex(item => item.id === itemId);

    if(index === -1) {
        res.status(400).json({error: "Item Not Found!"});
    } else {
        items.splice(index, 1);
        res.status(200).json({message: "Item deleted successfully."});
    }
});

/*
5. Write a GET route "/items" which sends the items array in response. Test your API with Postman and check that the above item got deleted.

*/
app.get("/items", (req, res) => {
    res.send(items);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});