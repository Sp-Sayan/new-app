import {React,useState,useEffect} from 'react'
import {Switch} from './ui/switch.jsx';
const ToggleSwitch = () => {
  
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
    <span>
      <Switch onCheckedChange={toggleTheme}></Switch>
    </span>
  )
}

export default ToggleSwitch;
