import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Create" element={<Create />}></Route>
        <Route exact path="/edit/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
