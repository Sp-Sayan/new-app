import { React, useState, useEffect } from "react";
import { Switch } from "./ui/switch.jsx";
const ToggleSwitch = () => {
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
    <span>
      <Switch checked={isDarkMode} onCheckedChange={toggleTheme}></Switch>
    </span>
  );
};

export default ToggleSwitch;
