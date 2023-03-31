import React from "react";
import Result from "./components/Result";
import Home from "./components/home";
import { MyComponent, MyContext } from "./components/MyContext";

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <MyComponent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </MyComponent>
  );
}

export default App;
