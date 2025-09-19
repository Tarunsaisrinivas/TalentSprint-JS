import React from "react";
import { useContext } from "react";
import { themeContext } from "../App";
import { Link, useNavigate } from "react-router";

export function Recipes() {
const navigate = useNavigate();
  const { recipes } = useContext(themeContext);
  const handleClick = (index)=>{
		navigate(`/recipes/${index}`)
}
  return (
    <>
    <Link to="/add" >Add Recipe</Link>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((item, index) => (
          <li
            key={index}
			onClick={()=>handleClick(item.id)}
            className="border-2 m-3 w-[250px] bg-sky-200 text-2xl"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}
