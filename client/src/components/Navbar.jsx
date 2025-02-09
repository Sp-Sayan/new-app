import React from "react";
import ToggleSwitch from "./ToggleSwitch.jsx";
import Icon from "../assets/react.svg";
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
    <nav className="bg-transparent h-20 w-full flex justify-between items-center z-50 p-10 md:p-10">
      <img src={Icon} alt="flix-icon" />

      <div className="menu-items w-fit mt-5 h-1/6 p-8 backdrop-blur-sm flex justify-evenly items-center rounded-[40px] dark:shadow-[1px_0px_5px_hsl(var(--primary))] shadow-[2px_2px_2px_hsl(var(--primary))]">
        <NavigationMenu className="h-2/3 w-full ">
          <NavigationMenuList className="flex space-x-4 ">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:text-primary">
                Getting Started
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-2">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <img src={Icon} alt="logo" className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          FlixChat
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Watch and spend time with your closed ones💫
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-1">
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">Login</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Proceed to login 🧑‍💻
                      </p>
                    </a>
                  </li>
                  <li className="row-span-1">
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Sign Up
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Proceed to Sign Up. 🧑‍💻
                      </p>
                    </a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/guest" className="hover:text-primary">
                  Guest Mode
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/about" className="hover:text-primary">
                  About
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <ToggleSwitch />
    </nav>
  );
};

export default Navbar;
