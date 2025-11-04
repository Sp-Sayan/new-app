import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    isDarkMode: localStorage.getItem("theme") === "dark"
}


const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
            localStorage.setItem("theme", state.isDarkMode ? "dark" : "light");
        },
        setDarkMode: (state) => {
            state.isDarkMode = true;
            localStorage.setItem("theme", "dark");
        }
    }
})

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;