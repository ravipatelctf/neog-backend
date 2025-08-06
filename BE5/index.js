const {initializeDatabase} = require("./db/db.connect");
const Post = require("./models/post.models");
const User = require("./models/user.models");

initializeDatabase();

const newUserData = {
    name: "John",
    email: "jogn@email.com",
};

const addUser = async (newUserData) => {
    try {
        const newUser = new User(newUserData);
        await newUser.save();
    } catch (error) {
        throw error;
    }
};

// addUser(newUserData);

const postData = {
    title: "Greeting",
    content: "Have a good day",
    author: "6892e5c3c276fc9f8ef9c71b"
};

const addPost = async () => {
    try {
        const newPost = new Post(postData);
        await newPost.save();
        console.log("Post added successfully.");
    } catch (error) {
        throw error;
    }
};

// addPost();

// get all posts

const getAllPosts = async () => {
    try {
        const allPosts = await Post.find().populate("author");
        console.log("All Posts: ", allPosts);
    } catch (error) {
        throw error;
    }
};

getAllPosts();