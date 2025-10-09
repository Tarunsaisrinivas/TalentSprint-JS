const express = require("express");
const { getRecipes, getRecipesById, createRecipe, updateRecipe, deleteRecipes } = require("../controllers/recipeController");

const keerthi = express.Router();

keerthi.get("/",getRecipes); // To get items
keerthi.get("/:id",getRecipesById); // To get items of particular id base
keerthi.post("/",createRecipe);
keerthi.put("/:id",updateRecipe);
keerthi.delete("/:id",deleteRecipes);




module.exports = keerthi

// http://localhost:3000/recipe/1234567890