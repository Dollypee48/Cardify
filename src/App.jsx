import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
