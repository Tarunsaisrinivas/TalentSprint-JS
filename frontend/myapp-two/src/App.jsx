import { createContext } from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router'

import {Home, About, Contact, Recipes} from './pages'

import Footer from './components/Footer'
import NavBar from "./components/NavBar";
import { useState } from "react";
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from "./pages/AddRecipe";
import Login from "./pages/Login";

const reciepesList = [
    {
      id: 1,
      title: "Lemon Rice",
      description:
        "Tangy and flavorful rice dish made with lemon juice and tempered spices.",
      ingred: [
        "2 cups cooked rice",
        "2 tbsp lemon juice",
        "1 tbsp oil",
        "1/2 tsp mustard seeds",
        "1/2 tsp turmeric powder",
        "1 green chili, chopped",
        "A few curry leaves",
        "Salt to taste",
      ],
      instr:
        "Heat oil in a pan, splutter mustard seeds, add green chili, curry leaves, and turmeric. Add cooked rice, salt, and lemon juice. Mix well and serve.",
      category: "Quick Meal",
    },
    {
      id: 2,
      title: "Curd Rice",
      description:
        "Cool and creamy rice mixed with yogurt, a perfect summer dish.",
      ingred: [
        "2 cups cooked rice",
        "1 cup plain curd (yogurt)",
        "1/2 cup milk",
        "Salt to taste",
        "1/2 tsp mustard seeds",
        "1 green chili, chopped",
        "A few curry leaves",
        "1 tsp oil",
      ],
      instr:
        "Mix curd, milk, and salt into the cooked rice. Heat oil, splutter mustard seeds, add green chili and curry leaves. Pour over rice and mix well.",
      category: "Quick Meal",
    },
    {
      id: 3,
      title: "Upma",
      description:
        "Soft and savory semolina breakfast dish cooked with onions and spices.",
      ingred: [
        "1 cup rava (semolina)",
        "2 cups water",
        "1 onion, chopped",
        "1 green chili, chopped",
        "A few curry leaves",
        "1/2 tsp mustard seeds",
        "1 tbsp oil",
        "Salt to taste",
      ],
      instr:
        "Dry roast rava until light golden. Heat oil, splutter mustard seeds, add onion, chili, and curry leaves. Add water, salt, and bring to a boil. Slowly add rava while stirring to avoid lumps. Cook until soft.",
      category: "Breakfast",
    },
    {
      id: 4,
      title: "Tomato Chutney",
      description:
        "A tangy chutney made from tomatoes, perfect as a side for idli or dosa.",
      ingred: [
        "2 tomatoes, chopped",
        "2 dried red chilies",
        "1 onion, chopped",
        "1 tbsp oil",
        "Salt to taste",
        "1/2 tsp mustard seeds",
        "A few curry leaves",
      ],
      instr:
        "Heat oil, sauté onion, tomatoes, and red chilies until soft. Blend into a paste. In another pan, heat oil, splutter mustard seeds and curry leaves, pour over chutney and serve.",
      category: "Side Dish",
    },
    {
      id: 5,
      title: "Tomato Chutney",
      description:
        "A tangy chutney made from tomatoes, perfect as a side for idli or dosa.",
      ingred: [
        "2 tomatoes, chopped",
        "2 dried red chilies",
        "1 onion, chopped",
        "1 tbsp oil",
        "Salt to taste",
        "1/2 tsp mustard seeds",
        "A few curry leaves",
      ],
      instr:
        "Heat oil, sauté onion, tomatoes, and red chilies until soft. Blend into a paste. In another pan, heat oil, splutter mustard seeds and curry leaves, pour over chutney and serve.",
      category: "Side Dish",
    },
  ];

export const themeContext = createContext();

function App() {
  const [recipes, setRecipes] = useState(reciepesList)
  return <>
      <BrowserRouter>
      <themeContext.Provider value={{recipes, setRecipes}}>
        <NavBar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/recipes" element = {<Recipes />} />
          <Route path="/add" element = {<AddRecipe />} />
          <Route path="/recipes/:index" element = {<RecipeDetails />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/login" element = {<Login />} />
        </Routes>
        <Footer />
        </themeContext.Provider>
      </BrowserRouter>
  </>;
}

export default App;
