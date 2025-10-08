const { default: mongoose } = require("mongoose");

const recipe = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    cookingTime: { type: Number, required: true },
});

module.exports = mongoose.model("Recipe", recipe);