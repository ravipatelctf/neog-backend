const {initializeDatabase} = require("./db/db.connect");
const Recipe = require("./models/recipe.models");

require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

initializeDatabase();

/*
1. Create a Mongoose model for a Recipe with the following attributes:

title (String): The title or subject of the note. This field is required.
author (String): Author of the recipe. This field is required.
difficulty (String): The difficulty or level of the recipe. Choose from: 'Easy', 'Intermediate', 'Difficult'.
prepTime (Number): The preparation time needed. This field is required.
cookTime (Number): Total cooking time needed. This field is required.
ingredients (Array of Strings): Ingredients needed for the dish. This is required.
instructions (Array of Strings): Instructions for preparing the dish. This is required.
imageUrl (String): An image of the recipe. This is required.
Include the option { timestamps: true } to automatically track the creation and update times of each recipe.

*/

/*
2. Create your db connection.

*/

/*
3. Create an API with route "/recipes" to create a new recipe in the recipes database. Make sure to handle errors properly. Test your API with Postman. Add the following recipe:
{
  "title": "Spaghetti Carbonara",
  "author": "Sanjeev Kapoor",
  "difficulty": "Intermediate",
  "prepTime": 20,
  "cookTime": 15,
  "ingredients": [
    "200g spaghetti",
    "100g guanciale or pancetta, diced",
    "2 large eggs",
    "50g grated Pecorino Romano cheese",
    "Salt and black pepper to taste"
  ],
  "instructions": [
    "Cook the spaghetti in boiling salted water until al dente.",
    "Meanwhile, sauté the guanciale or pancetta until crispy.",
    "In a bowl, whisk together eggs and grated cheese.",
    "Drain the spaghetti and immediately toss with the egg mixture and cooked guanciale/pancetta.",
    "Season with salt and pepper. Serve immediately."
  ],
  "imageUrl": "https://example.com/spaghetti_carbonara.jpg"
}

*/

async function createRecipe(newRecipe) {
    try {
        const recipe = new Recipe(newRecipe);
        const savedRecipe = await recipe.save();
        return savedRecipe;
    } catch (error) {
        throw error;
    }
}

app.post("/recipes", async (req, res) => {
    try {
        const savedRecipe = await createRecipe(req.body);
        if(savedRecipe) {
            res
                .status(201)
                .json({message: "Recipe created successfully.", recipe: savedRecipe});
        } else {
            res
                .status(400)
                .json({error: "Recipe data must have all the required fields!"})
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to create a recipe!"});
    }
});

/*
4. Run your API and create another recipe data in the database.

{
  "title": "Chicken Tikka Masala",
  "author": "Sanjeev Kapoor",
  "difficulty": "Intermediate",
  "prepTime": 30,
  "cookTime": 30,
  "ingredients": [
    "500g boneless, skinless chicken thighs, cut into bite-sized pieces",
    "1 cup plain yogurt",
    "2 tablespoons vegetable oil",
    "2 onions, finely chopped",
    "4 cloves garlic, minced",
    "1-inch piece of ginger, grated",
    "2 teaspoons ground coriander",
    "1 teaspoon ground cumin",
    "1 teaspoon paprika",
    "1/2 teaspoon turmeric",
    "1/2 teaspoon cayenne pepper (adjust to taste)",
    "1 cup tomato puree",
    "1 cup heavy cream",
    "Salt and cilantro leaves for garnish"
  ],
  "instructions": [
    "Marinate chicken pieces in yogurt and spices for at least 1 hour.",
    "Heat oil in a pan and sauté onions, garlic, and ginger until golden.",
    "Add marinated chicken and cook until browned.",
    "Stir in tomato puree and cook until chicken is cooked through.",
    "Add cream, season with salt, and simmer for a few minutes.",
    "Garnish with cilantro leaves and serve with rice or naan."
  ],
  "imageUrl": "https://example.com/chicken_tikka_masala.jpg"
}

*/

/*
5. Run your API and create another recipe data in the database.

{
  "title": "Classic Chocolate Chip Cookies",
  "author": "Baker Betty",
  "difficulty": "Easy",
  "prepTime": 15,
  "cookTime": 10,
  "ingredients": [
    "1 cup (2 sticks) unsalted butter, softened",
    "3/4 cup granulated sugar",
    "3/4 cup packed light brown sugar",
    "1 teaspoon vanilla extract",
    "2 large eggs",
    "2 1/4 cups all-purpose flour",
    "1 teaspoon baking soda",
    "1/2 teaspoon salt",
    "2 cups semisweet chocolate chips"
  ],
  "instructions": [
    "Preheat the oven to 375°F (190°C). Line baking sheets with parchment paper.",
    "In a large bowl, cream together the butter, granulated sugar, and brown sugar until smooth.",
    "Beat in the vanilla extract and eggs one at a time until well blended.",
    "Combine the flour, baking soda, and salt; gradually stir into the creamed mixture.",
    "Stir in the chocolate chips by hand using a wooden spoon.",
    "Drop by rounded spoonfuls onto the prepared baking sheets.",
    "Bake for 8 to 10 minutes in the preheated oven, or until edges are golden.",
    "Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack to cool completely."
  ],
  "imageUrl": "https://example.com/classic_chocolate_chip_cookies.jpg"
}

*/

/*
6. Create an API to get all the recipes in the database as a response. Make sure to handle errors properly.

*/
async function readAllRecipes() {
    try {
        const recipes = await Recipe.find();
        return recipes;
    } catch (error) {
        throw error;
    }
}

app.get("/recipes", async (req, res) => {
    try {
        const recipes = await readAllRecipes();
        if (recipes) {
            res
                .status(200)
                .send({message: "Recipes fetched succesfully.", recipes: recipes});
        } else {
            res
                .status(404)
                .send({message: "Recipes Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch all recipes!"});
    }
});

/*
7. Create an API to get a recipe's details by its title. Make sure to handle errors properly.

*/
async function readRecipeByTitle(recipeTitle) {
    try {
        const recipe = await Recipe.findOne({title: recipeTitle});
        return recipe;
    } catch (error) {
        throw error;
    }
}

app.get("/recipes/title/:recipeTitle", async (req, res) => {
    try {
        const recipe = await readRecipeByTitle(req.params.recipeTitle);
        if (recipe) {
            res
                .status(200)
                .json({message: "Recipe fetched successfully.", recipe: recipe});
        } else {
            res
                .status(404)
                .json({error: "Recipe Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch a recipe!"});
    }
});

/*
8. Create an API to get details of all the recipes by an author. Make sure to handle errors properly.

*/
async function readRecipeByAuthor(recipeAuthor) {
    try {
        const recipe = await Recipe.find({author: recipeAuthor});
        return recipe;
    } catch (error) {
        throw error;
    }
}

app.get("/recipes/author/:recipeAuthor", async (req, res) => {
    try {
        const recipe = await readRecipeByAuthor(req.params.recipeAuthor);
        if (recipe) {
            res
                .status(200)
                .json({message: "Recipes fetched successfully.", recipe: recipe});
        } else {
            res
                .status(404)
                .json({error: "Recipes Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch recipes!"});
    }
});

/*
9. Create an API to get all the recipes that are of "Easy" difficulty level.

*/
async function readRecipeByDifficulty(recipeDifficulty) {
    try {
        const recipe = await Recipe.find({difficulty: recipeDifficulty});
        return recipe;
    } catch (error) {
        throw error;
    }
}

app.get("/recipes/difficulty/:recipeDifficulty", async (req, res) => {
    try {
        const recipe = await readRecipeByDifficulty(req.params.recipeDifficulty);
        if (recipe) {
            res
                .status(200)
                .json({message: "Recipes fetched successfully.", recipe: recipe});
        } else {
            res
                .status(404)
                .json({error: "Recipes Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to fetch recipes!"});
    }
});

/*
10. Create an API to update a recipe's difficulty level with the help of its id. Update the difficulty of "Spaghetti Carbonara" from "Intermediate" to "Easy". Send an error message "Recipe not found" if the recipe is not found. Make sure to handle errors properly.

*/
async function updateRecipeById(recipeId, dataToUpdate) {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, dataToUpdate);
        return updatedRecipe;
    } catch (error) {
        throw error;
    }
}

app.post("/recipes/id/:recipeId", async (req, res) => {
    try {
        const updatedRecipe = await updateRecipeById(req.params.recipeId, req.body);
        if (updatedRecipe) {
            res
                .status(200)
                .json({message: "Recipe updated successfully.", recipe: updatedRecipe});
        } else {
            res
                .status(404)
                .json({error: "Recipe Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to update the recipe!"});
    }
});

/*
11. Create an API to update a recipe's prep time and cook time with the help of its title. Update the details of the recipe "Chicken Tikka Masala". Send an error message "Recipe not found" if the recipe is not found. Make sure to handle errors properly.

Updated recipe data: { "prepTime": 40, "cookTime": 45 }

*/
async function updateRecipeByTitle(recipeTitle, dataToUpdate) {
    try {
        const updatedRecipe = await Recipe.findOneAndUpdate({title: recipeTitle}, dataToUpdate);
        return updatedRecipe;
    } catch (error) {
        throw error;
    }
}

app.post("/recipes/title/:recipeTitle", async (req, res) => {
    try {
        const updatedRecipe = await updateRecipeByTitle(req.params.recipeTitle, req.body);
        if (updatedRecipe) {
            res
                .status(200)
                .json({message: "Recipe updated successfully.", recipe: updatedRecipe});
        } else {
            res
                .status(404)
                .json({error: "Recipe Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to update the recipe!"});
    }
});

/*
12. Create an API to delete a recipe with the help of a recipe id. Send an error message "Recipe not found" if the recipe does not exist. Make sure to handle errors properly.

*/
async function deleteRecipeById(recipeId) {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
        return deletedRecipe;
    } catch (error) {
        throw error;
    }
}

app.delete("/recipes/id/:recipeId", async (req, res) => {
    try {
        const deletedRecipe = await deleteRecipeById(req.params.recipeId);
        if (deletedRecipe) {
            res
                .status(200)
                .json({message: "Recipe deleted successfully.", deletedRecipe: deletedRecipe});
        } else {
            res
                .status(404)
                .json({error: "Recipe Not Found!"});
        }
    } catch (error) {
        res
            .status(500)
            .json({error: "Failed to delete a recipe by id!"});
    }
});

// ---------------------------------------------------------------------------

app.get("/", (req, res) => {
    res.send("Hello from Assignment 2");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
