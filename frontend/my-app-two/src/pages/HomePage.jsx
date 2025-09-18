import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import Loading from "../components/Loading";

function HomePage() {
  const { data, loading, error } = useFetchData();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">Error loading recipes</div>;

  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-center"> Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition transform cursor-pointer"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{recipe.name}</h2>
              <p className="text-gray-500 text-sm">
                ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
              </p>
              <p className="text-gray-600 text-sm mt-2">
                {recipe.cuisine} • {recipe.difficulty}
              </p>
              <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                {recipe.instructions[0]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal  */}
      {selectedRecipe && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="absolute top-3 right-3  text-gray-600 hover:text-black text-xl"
              onClick={() => setSelectedRecipe(null)}
            >
              x
            </button>

            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              className="w-full h-72 object-cover rounded-xl mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">{selectedRecipe.name}</h2>
            <p className="text-gray-600 mb-2">
              ⏱️ {selectedRecipe.prepTimeMinutes + selectedRecipe.cookTimeMinutes} mins • 🍽️ Serves{" "}
              {selectedRecipe.servings}
            </p>
            <p className="text-gray-600 mb-4">
              Cuisine: {selectedRecipe.cuisine} • Difficulty: {selectedRecipe.difficulty}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedRecipe.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-2">📝 Ingredients</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
              {selectedRecipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">👨‍🍳 Instructions</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {selectedRecipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
