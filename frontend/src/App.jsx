import React from "react";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Home from "./Components/Home";
import ReadUser from "./Components/ReadUser";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readuser/:id" element={<ReadUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
