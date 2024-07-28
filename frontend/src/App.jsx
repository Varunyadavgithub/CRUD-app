import React from "react";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Home from "./Components/Home";
import ReadUser from "./Components/ReadUser";
import UpdateUser from "./Components/UpdateUser";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readuser/:id" element={<ReadUser/>}/>
          <Route path="/updateuser/:id" element={<UpdateUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
