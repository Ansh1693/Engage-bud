import React from "react";
import "./App.css";
import Result from "./components/Result";
import Home from "./components/home";
import { MyComponent, MyContext } from "./components/MyContext";

import { Route, Routes } from "react-router-dom";

// import Home from "./components/home";

function App() {
  const { result} = React.useContext(MyContext);
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
