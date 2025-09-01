import React from "react";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

const Loader = ({
  darkThemeColor = "white",
  lightThemeColor = "black",
  size = "40",
}) => {
  return (
    <LineSpinner
      size={size}
      stroke="3"
      speed="1"
      color={
        localStorage.getItem("theme") === "dark"
          ? darkThemeColor
          : lightThemeColor
      }
    />
  );
};

export default Loader;
