import { React, useState, useEffect } from "react";
import { Switch } from "./ui/switch.jsx";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils.js";
const ToggleSwitch = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <span onClick={toggleTheme} className={cn("cursor-pointer", className)}>
      {isDarkMode ? <Sun /> : <Moon />}
    </span>
  );
};

export default ToggleSwitch;
