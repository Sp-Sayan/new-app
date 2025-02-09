import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex items-center justify-evenly h-full w-full absolute ">
      <Home />
    </div>
  );
}

export default App;
