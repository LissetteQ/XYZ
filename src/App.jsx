import React from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";

function App() {
  const [category, setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");

  console.log("App Search Term:", searchTerm);

  return (
    <BrowserRouter>
      <Navbar
        setCategory={setCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Routes>
        <Route path="/" element={<Home category={category} searchTerm={searchTerm} />} />
        <Route path="/Library" element={<Library />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;