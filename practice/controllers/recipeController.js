const recipe = require("../models/recipe");

exports.getRecipes=async(req,res)=>{
    try {
        const recipe = await recipe.find();
        if(!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json(recipe);
    } catch (error) {
        console.log("Get Recipes", error);
        res.status(500).json({ error: error.message });
    }
}
exports.getRecipesById=(req,res)=>{}
exports.createRecipe=(req,res)=>{}
exports.updateRecipe=(req,res)=>{}
exports.deleteRecipes=(req,res)=>{}