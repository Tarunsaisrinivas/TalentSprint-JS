const Recipe = require("../models/recipe");


exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

exports.getRecipeById = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};

exports.createRecipe = async (req, res, next) => {
  try {
    const { name, ingredients, instructions, cookingTime } = req.body;

    const recipe = await Recipe.create({
      name,
      ingredients,
      instructions,
      cookingTime,
    });

    res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};


exports.updateRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};


exports.deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    next(error);
  }
};
