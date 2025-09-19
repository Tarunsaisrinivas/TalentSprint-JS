import React from 'react';

const RecipeList = ({ recipes }) => {
    if (!recipes || recipes.length === 0) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <p className="text-gray-500">No recipes added yet.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">My Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="border rounded-lg overflow-hidden shadow-md">
                        <div className="p-4">
                            <h3 className="font-bold text-xl mb-2">{recipe.title}</h3>
                            <p className="text-gray-600 mb-4">{recipe.description}</p>
                            <div className="mb-4">
                                <h4 className="font-medium mb-1">Ingredients:</h4>
                                <ul className="text-gray-600 text-sm list-disc pl-4">
                                    {recipe.ingred.slice(0, 3).map((ingredient, idx) => (
                                        <li key={idx}>{ingredient}</li>
                                    ))}
                                    {recipe.ingred.length > 3 && <li>...</li>}
                                </ul>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">{recipe.category}</span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                    View Recipe
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;