import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="flex items-center justify-evenly h-full w-full absolute ">
      {/* <Home /> */}
      <About/>
    </div>
  );
}

export default App;
