import React, { useState, useContext } from "react";
import { themeContext } from "../App";
import { useNavigate } from "react-router";

function AddRecipe() {
    const { recipes, setRecipes } = useContext(themeContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        ingred: "",
        instr: "",
        category: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const ingredArray = formData.ingred.split(",").map((item) => item.trim());

        const newRecipe = {
            id: recipes.length + 1,
            title: formData.title,
            description: formData.description,
            ingred: ingredArray,
            instr: formData.instr,
            category: formData.category,
        };

        setRecipes([...recipes, newRecipe]); 
        navigate("/recipes"); 
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl mb-4">Add New Recipe</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-[400px] border p-4 rounded bg-gray-100"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <textarea
                    name="ingred"
                    placeholder="Ingredients (comma separated)"
                    value={formData.ingred}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <textarea
                    name="instr"
                    placeholder="Instructions"
                    value={formData.instr}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
}

export default AddRecipe;
