import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar.jsx";
import Login from "./Component/Login.jsx";
import Register from "./Component/Register.jsx";
import AddRecipe from "./Component/Add.jsx";
import  Home  from "./Component/Home.jsx";
import Saved from "./Component/Saved.jsx";
import Profile from "./Component/Profile.jsx";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
