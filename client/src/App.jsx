import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage.jsx";
import { Switch } from "./components/ui/switch";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    // <div className="h-full w-full bg-slate-500 flex items-center justify-center">
    //   <p className="font-light text-5xl text-slate-200">
    //      Welcome to Vite + React + Tailwind !!!
    //   </p>
    // </div>
    <div className="flex items-center justify-evenly bg-background h-full w-full">
      <Homepage />
      <Switch onCheckedChange={toggleTheme}></Switch>
    </div>
  );
}

export default App;
