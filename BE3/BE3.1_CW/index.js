const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.get("/about", (req, res) => {
    res.send("This is about page.");
});

app.get("/contact", (req, res) => {
    res.send("Contact Us at contact@example.com");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});