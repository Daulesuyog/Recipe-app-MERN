import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar.jsx";
import Login from "./Component/Login.jsx";
import Register from "./Component/Register.jsx";
import AddRecipe from "./Component/AddRecipe.jsx";
import  Home  from "./Component/Home.jsx";
import Saved from "./Component/Saved.jsx";
import Profile from "./Component/Profile.jsx";
import  FetctRecipeById  from "./Component/FetctRecipeById.jsx";
import Detail from "./Component/Detail.jsx";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          { <Route path="/" element={<Home />} /> }
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/saved" element={<Saved />}/>
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
