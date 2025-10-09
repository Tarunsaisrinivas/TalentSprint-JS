import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function AddRecipe() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        ingredients: "",
        instructions: "",
        cookingTime: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const ingredArray = formData.ingredients
                .split(",")
                .map((item) => item.trim());

            const recipeData = {
                name: formData.name,
                ingredients: ingredArray,
                instructions: formData.instructions,
                cookingTime: Number(formData.cookingTime),
            };

            
            await axios.post("http://localhost:5000/recipes", recipeData);

            navigate("/recipes"); // redirect after success
        } catch (err) {
            console.error(err);
            setError("Failed to add recipe. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl mb-4">Add New Recipe</h1>

            {error && <p className="text-red-500">{error}</p>}

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-[400px] border p-4 rounded bg-gray-100"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Recipe Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />

                <textarea
                    name="ingredients"
                    placeholder="Ingredients (comma separated)"
                    value={formData.ingredients}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />

                <textarea
                    name="instructions"
                    placeholder="Instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />

                <input
                    type="number"
                    name="cookingTime"
                    placeholder="Cooking Time (in minutes)"
                    value={formData.cookingTime}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className={`bg-blue-500 text-white py-2 rounded hover:bg-blue-600 ${loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    {loading ? "Adding..." : "Add Recipe"}
                </button>
            </form>
        </div>
    );
}

export default AddRecipe;
