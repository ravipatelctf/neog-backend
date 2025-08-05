const {initializeDatabase} = require("./db/db.config");
const Book = require("./models/book.models");

initializeDatabase();

require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());


/*
1. Create an API with route "/books" to create a new book data in the books Database. Make sure to do error handling. Test your API with Postman. Add the following book:

{
  "title": "Lean In",
  "author": "Sheryl Sandberg",
  "publishedYear": 2012,
  "genre": ["Non-fiction", "Business"],
  "language": "English",
  "country": "United States",
  "rating": 4.1,
  "summary": "A book about empowering women in the workplace and achieving leadership roles.",
  "coverImageUrl": "https://example.com/lean_in.jpg"
};

*/
async function createBook(newBook) {
    try {
        const book = new Book(newBook);
        const savedBook = await book.save();
        return savedBook;
    } catch (error) {
        throw error;
    }
}

app.post("/books", async (req, res) => {
    try {
        const savedBook = await createBook(req.body);
        res
            .status(201)
            .json({message: "New book created succesfully.", book: savedBook});
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to create a book!"});
    }
});

/*
2. Run your API and create another book data in the db.

{
  "title": "Shoe Dog",
  "author": "Phil Knight",
  "publishedYear": 2016,
  "genre": ["Autobiography", "Business"],
  "language": "English",
  "country": "United States",
  "rating": 4.5,
  "summary": "An inspiring memoir by the co-founder of Nike, detailing the journey of building a global athletic brand.",
  "coverImageUrl": "https://example.com/shoe_dog.jpg"
};
*/

/*
3. Create an API to get all the books in the database as response. Make sure to do error handling.

*/

async function readAllBooks() {
    try {
        const books = await Book.find();
        return books;
    } catch (error) {
        throw error;
    }
}

app.get("/books", async (req, res) => {
    try {
        const books = await readAllBooks();
        res
            .status(200)
            .json({message: "Books fetched succesfully.", books: books});
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch books!"});
    }
});

/*
4. Create an API to get a book's detail by its title. Make sure to do error handling.

*/

async function readBookByTitle(bookTitle) {
    try {
        const book = await Book.findOne({title: bookTitle});
        return book;
    } catch (error) {
        throw error;
    }
}

app.get("/books/:bookTitle", async (req, res) => {
    try {
        const book = await readBookByTitle(req.params.bookTitle);
        res
            .status(200)
            .json({message: "Book fetched succesfully.", book: book});
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch book!"});
    }
});

/*
5. Create an API to get details of all the books by an author. Make sure to do error handling.

*/
async function readBookByAuthor(authorName) {
    try {
        const books = await Book.find({author: authorName});
        return books;
    } catch (error) {
        throw error;
    }
}

app.get("/books/author/:authorName", async (req, res) => {
    try {
        const books = await readBookByAuthor(req.params.authorName);
        res
            .status(200)
            .json({message: "Books fetched succesfully.", books: books});
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch books!"});
    }
});

/*
6. Create an API to get all the books which are of "Business" genre.

*/
async function readBookByGenre(bookGenre) {
    try {
        const books = await Book.find({genre: bookGenre});
        return books;
    } catch (error) {
        throw error;
    }
}

app.get("/books/genre/:bookGenre", async (req, res) => {
    try {
        const books = await readBookByGenre(req.params.bookGenre);
        res
            .status(200)
            .json({message: "Books fetched succesfully.", books: books});
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch books!"});
    }
});

/*
7. Create an API to get all the books which was released in the year 2012.

*/
async function readBooksByPublishedYear(year) {
    try {
        const books = await Book.find({publishedYear: year});
        return books;
    } catch (error) {
        throw error;
    }
}

app.get("/books/publishedYear/:year", async (req, res) => {
    try {
        const books = await readBooksByPublishedYear(req.params.year);
        res
            .status(200)
            .json({message: "Books fetched succesfully.", books: books});
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch books!"});
    }
});

/*
8. Create an API to update a book's rating with the help of its id. Update the rating of the "Lean In" from 4.1 to 4.5. Send an error message "Book does not exist", in case that book is not found. Make sure to do error handling.

Updated book rating: { "rating": 4.5 }
*/
const updatebookById = async (bookId, dataToUpdate) => {
    try {
        const updatedbook = await Book.findByIdAndUpdate(bookId, dataToUpdate, {new: true});
        return updatedbook;
    } catch (error) {
        throw error;
    }
};

app.post("/books/id/:bookId", async (req, res) => {
    try {
        const updatedbook = await updatebookById(req.params.bookId, req.body);
        if(updatedbook) {
            res
                .status(200)
                .json({message: "book updated successfully.", updatedbook: updatedbook});
        } else {
            res
                .status(404)
                .json({error: "book Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to update book!"});
    }
});

/*
9. Create an API to update a book's rating with the help of its title. Update the details of the book "Shoe Dog". Use the query .findOneAndUpdate() for this. Send an error message "Book does not exist", in case that book is not found. Make sure to do error handling.

Updated book data: { "publishedYear": 2017, "rating": 4.2 }
*/
const updatebookByTitle = async (bookTitle, dataToUpdate) => {
    try {
        const updatedbook = await Book.findOneAndUpdate({title: bookTitle}, dataToUpdate, {new: true});
        return updatedbook;
    } catch (error) {
        throw error;
    }
};

app.post("/books/:bookTitle", async (req, res) => {
    try {
        const updatedbook = await updatebookByTitle(req.params.bookTitle, req.body);
        if(updatedbook) {
            res
                .status(200)
                .json({message: "book updated successfully.", updatedbook: updatedbook});
        } else {
            res
                .status(404)
                .json({error: "book Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to update book!"});
    }
});

/*
10. Create an API to delete a book with the help of a book id, Send an error message "Book not found" in case the book does not exist. Make sure to do error handling.

*/
async function deleteBookById(bookId) {
    try {
        const deletedBook = await Book.findByIdAndDelete(bookId);
        return deletedBook;
    } catch (error) {
        throw error;
    }
};

app.delete("/books/id/:bookId", async (req, res) => {
    try {
        const deletedBook = await deleteBookById(req.params.bookId);
        if (deletedBook) {
            res
                .status(200)
                .json({message: "Book deleted successfully."});
        } else {
            res
                .status(404)
                .json({error: "Book Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to delete Book data!"});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});