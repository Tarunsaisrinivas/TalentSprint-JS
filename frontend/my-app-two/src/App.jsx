import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import AddRecipe from "./pages/AddRecipe";

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
