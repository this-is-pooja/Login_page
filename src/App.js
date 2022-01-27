import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/Home" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App;

