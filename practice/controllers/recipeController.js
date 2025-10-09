const Recipes = require("../models/recipe");

exports.getRecipes = async (req, res) => {
  try {
    const recipe = await Recipes.find();
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    console.log("Get Recipes", error);
    res.status(500).json({ error: error.message });
  }
};
exports.getRecipesById = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    console.log("Get Recipes by Id", error);
    res.status(500).json({ error: error.message });
  }
};
exports.createRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions, cookingTime } = req.body;
    const recipe = await  Recipes.create({
      name,
      ingredients,
      instructions,
      cookingTime,
    });
    res.json(recipe);
  } catch (error) {
    console.log("Create Recipes ", error);
    res.status(500).json({ error: error.message });
  }
};
exports.updateRecipe = async(req, res) => {
    try {
        const recipe = await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!recipe){
            res.json("Recipe not found");
        }
        res.status(200).json(recipe)
    } catch (error) {
         console.log("Update Recipes ", error);
         res.status(500).json({ error: error.message });
    }
};
exports.deleteRecipes = async(req, res) => {
    try {
        const recipe = await Recipes.findByIdAndDelete(req.params.id);
          if (!recipe) {
            res.json("Recipe not found");
          }
          res.json(recipe);
    } catch (error) {
         console.log("Delete Recipes ", error);
         res.status(500).json({ error: error.message });
    }
};
