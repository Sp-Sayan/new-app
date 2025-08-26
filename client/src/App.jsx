import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Settings from "./pages/Settings";



/*import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";*/











function App() {
  return (
    

    
    /*<div className="flex items-center justify-evenly h-full w-full absolute ">
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      </div>*/

      
      
      <Settings/>
    
      
      
    
  
  );
}

export default App;
