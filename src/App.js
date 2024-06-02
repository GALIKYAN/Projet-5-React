import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About";
import Houses from "./Pages/Houses"
import Error from "./Pages/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      <Route path="/details/:id" element={<Houses />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
export default App;
