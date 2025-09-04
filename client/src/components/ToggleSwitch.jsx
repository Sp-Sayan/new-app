import { React, useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/themeSlice";
const ToggleSwitch = ({ className = "" }) => {
  const themeState = useSelector((state) => state.checkTheme);
  const dispatch = useDispatch();

  const handleClick = () => {
    // setIsDarkMode((prev) => {
    //   const newTheme = !prev;
    //   localStorage.setItem("theme", newTheme ? "dark" : "light");
    //   return newTheme;
    // });

    dispatch(toggleTheme());
  };

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [isDarkMode]);

  return (
    <span onClick={handleClick} className={cn("cursor-pointer", className)}>
      {themeState.isDarkMode ? <Sun /> : <Moon />}
    </span>
  );
};

export default ToggleSwitch;
