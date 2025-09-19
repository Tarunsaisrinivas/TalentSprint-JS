import React from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { themeContext } from "../App";

function RecipeDetails() {
  const { index } = useParams();
  const navigate = useNavigate();

  const { recipes } = useContext(themeContext);
  const recipe = recipes.find((item) => item.id == index);

  return (
    <div className="relative space-y-3 text-xl px-3 py-5 container mx-auto bg-sky-200 mt-0.5 mb-8">
      <h1>
        <b>Title:</b> {recipe.title}
      </h1>
      <h1>
        <b>Description:</b> {recipe.description}
      </h1>
      <ul className="list-disc space-y-2 list-inside">
        <h1 className="font-bold">Ingredients</h1>
        {recipe.ingred.map((val, index) => (
          <li key={index} className="ps-20">
            {val}
          </li>
        ))}
      </ul>
      <h1>
        <b>Instructions:</b> {recipe.instr}
      </h1>
      <h1>
        <b>Category:</b>{" "}
        <span className="bg-amber-200 px-3 py-0.5 rounded-xl font-semibold">
          {recipe.category}
        </span>
      </h1>
      <button
        type="button"
        onClick={() => navigate("/recipes")}
        className="btn-bg absolute -bottom-2 -right-8"
      >
        Back to Recipes
      </button>
    </div>
  );
}

export default RecipeDetails;
