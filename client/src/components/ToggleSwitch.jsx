import { React, useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/themeSlice";
const ToggleSwitch = ({ className = "" }) => {
  const themeState = useSelector((state) => state.checkTheme);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <span onClick={handleClick} className={cn("cursor-pointer", className)}>
      {themeState.isDarkMode ? <Sun /> : <Moon />}
    </span>
  );
};

export default ToggleSwitch;
