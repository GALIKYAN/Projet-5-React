import React from "react"
import Home from "./components/Pages/Home"
import Error from "./components/Pages/Error"
import About from "./components/Pages/About"
import { Routes, Route } from "react-router-dom"
import "./App.css"


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes> 
    </div>
  );
}
export default App;
