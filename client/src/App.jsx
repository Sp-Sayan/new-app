import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./components/ThemeProvider";
import ToggleSwitch from "./components/ToggleSwitch";
import PublicRoutes from "./components/PublicRoutes";

function App() {
  return (
    <div className="flex items-center justify-evenly h-full w-full absolute ">
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={
                <PublicRoutes>
                  <Home />
                </PublicRoutes>
              }
            />
            <Route
              path="/about"
              element={
                <PublicRoutes>
                  <About />
                </PublicRoutes>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoutes>
                  <SignUp />
                </PublicRoutes>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoutes>
                  <Login />
                </PublicRoutes>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
