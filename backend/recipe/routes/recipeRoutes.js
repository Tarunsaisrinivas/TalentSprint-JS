// const express = require("express");
// const {
//   getRecipes,
//   getRecipeById,
//   createRecipe,
//   updateRecipe,
//   deleteRecipe,
// } = require("../controllers/recipeController");

// const router = express.Router();

// router.route("/").get(getRecipes).post(createRecipe);

// router.route("/:id").get(getRecipeById).put(updateRecipe).delete(deleteRecipe);

// module.exports = router;
const express = require("express");
const {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Recipe:
 *       type: object
 *       required:
 *         - name
 *         - ingredients
 *         - instructions
 *         - cookingTime
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID of the recipe
 *         name:
 *           type: string
 *           description: Name of the recipe
 *         ingredients:
 *           type: array
 *           items:
 *             type: string
 *           description: List of ingredients
 *         instructions:
 *           type: string
 *           description: Preparation instructions
 *         cookingTime:
 *           type: number
 *           description: Time required to cook (in minutes)
 *       example:
 *         name: "Spaghetti Carbonara"
 *         ingredients: ["spaghetti", "eggs", "pancetta", "parmesan", "pepper"]
 *         instructions: "Boil pasta and mix with sauce."
 *         cookingTime: 25
 */

/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: API for managing recipes
 */

/**
 * @swagger
 * /recipes:
 *   get:
 *     summary: Get all recipes
 *     tags: [Recipes]
 *     responses:
 *       200:
 *         description: List of all recipes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recipe'
 */
router.get("/", getRecipes);

/**
 * @swagger
 * /recipes/{id}:
 *   get:
 *     summary: Get a single recipe by ID
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Recipe ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recipe found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 *       404:
 *         description: Recipe not found
 */
router.get("/:id", getRecipeById);

/**
 * @swagger
 * /recipes:
 *   post:
 *     summary: Create a new recipe
 *     tags: [Recipes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recipe'
 *     responses:
 *       201:
 *         description: Recipe created successfully
 */
router.post("/", createRecipe);

/**
 * @swagger
 * /recipes/{id}:
 *   put:
 *     summary: Update an existing recipe
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Recipe ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recipe'
 *     responses:
 *       200:
 *         description: Recipe updated successfully
 *       404:
 *         description: Recipe not found
 */
router.put("/:id", updateRecipe);

/**
 * @swagger
 * /recipes/{id}:
 *   delete:
 *     summary: Delete a recipe
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Recipe ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recipe deleted successfully
 *       404:
 *         description: Recipe not found
 */
router.delete("/:id", deleteRecipe);

module.exports = router;
