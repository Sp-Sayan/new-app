import React from 'react'
import ToggleSwitch from './ToggleSwitch.jsx'
import Icon from '../assets/react.svg'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu.jsx";


const Navbar = () => {
  return (
    <nav className='bg-slate-600 h-20 flex  justify-evenly items-center'>

      <img src={Icon} alt="flix-icon" />

      <div className="menu-items h-full flex justify-center items-center w-5/6  ">
        <NavigationMenu className='h-2/3 w-5/6 '>
          <NavigationMenuList className="flex space-x-4 ">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
               <NavigationMenuContent>
                
               </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/about" className="hover:text-blue-600">Guest Mode</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/contact" className="hover:text-blue-600">About</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>


      <ToggleSwitch />
    </nav>
  )
}

export default Navbar
