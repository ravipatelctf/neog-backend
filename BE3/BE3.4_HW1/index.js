const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

/*
1. Write a GET route "/" which sends a message "Hello, From Express Server.". Test your API with Postman.

*/
app.get("/", (req, res) => {
    res.send("Hello, From Express Server.");
});

/*
2. Write a POST route which updates a book with id 2, from the pre-defined books array. Send an error message "Book not found" in case the book does not exist.

Updated book data: { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1970 }

Pre-defined books array:

*/
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 }
];

app.post("/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;
    const bookToUpdate = books.find(book => book.id === bookId);

    if(!bookToUpdate) {
        res
            .status(404)
            .json({error: "Book Not Found!"});
    } else {
        if(!updatedBook.id || !updatedBook.title || !updatedBook.author || !updatedBook.year) {
            res
                .status(400)
                .json({error: "id, title, author and year are required!"})
        } else {
            Object.assign(bookToUpdate, updatedBook);
            res
                .status(200)
                .json({message: "book data updated successfully."});
        }
    }
});

/*
3. Write a GET route "/books" which sends the books array in response. Test your API with Postman and see that the above book with id 2 is updated.

*/
app.get("/books", (req, res) => {
    res.send(books);
});

/*
4. Write a POST route which updates a todo with id 1, from the pre-defined todos array. Send an error message "Todo does not exist", in case any todo is not found.

Updated todo data: { id: 1, title: 'Water the non-cactus plants', day: 'Saturday' }

Pre-defined todos array:

*/
const todos = [
  { id: 1, title: 'Water the plants', day: 'Saturday' },
  { id: 2, title: 'Go for a walk', day: 'Sunday' }
];

app.post("/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id);
    const updatedTodoData = req.body;
    const todoToUpdate = todos.find(todo => todo.id === todoId);

    if(!todoToUpdate) {
        res
            .status(404)
            .json({error: "Todo does not exist"});
    } else {
        if(!updatedTodoData.id || !updatedTodoData.title || !updatedTodoData.day) {
            res
                .status(400)
                .json({error: "id, title and day are required!"});
        } else {
            Object.assign(todoToUpdate, updatedTodoData);
            res
                .status(200)
                .json({message: "Todo updated successfully."});
        }
    }
});

/*
5. Write a GET route "/todos" which sends the todos array in response. Test your API with Postman.

*/
app.get("/todos", (req, res) => {
    res.send(todos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http:localhost:${PORT}`);
});