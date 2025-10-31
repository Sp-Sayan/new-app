import React from "react";
import ToggleSwitch from "./ToggleSwitch.jsx";
import { ArrowRight } from "lucide-react";
import Icon from "../assets/react.svg";
import NavLogo1 from "../assets/nav-logo1.webp";
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
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const iconClick = () => {
    navigate("/home");
  };

  return (
    <nav className=" bg-transparent fixed h-[7rem] w-full backdrop-blur-3xl flex justify-between items-center z-50 p-10 md:p-10">
      <img
        onClick={iconClick}
        src={Icon}
        alt="flix-icon"
        className="cursor-pointer"
      />

      <div className="menu-items w-fit mt-2 h-1/6 p-8 backdrop-blur-sm flex justify-evenly items-center rounded-[40px] dark:shadow-[1px_0px_5px_hsl(var(--primary))] shadow-[1px_0px_5px_hsl(var(--primary))]">
        <NavigationMenu className="h-2/3 w-full ">
          <NavigationMenuList className="flex space-x-4 ">
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" bg-transparent font-title hover:text-primary">
                Getting Started
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-2">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex z-1 h-full w-full select-none hover:scale-90 flex-col justify-end rounded-md bg-gradient-to-bl dark:from-destructive/50 from-primary/20  dark:to-primary/60 to-destructive/80  relative p-6 no-underline outline-none focus:shadow-md transition-all duration-300 ease-in-out"
                        href="/home"
                      >
                        <img
                          src={Icon}
                          alt="logo"
                          className="h-6 w-6 relative z-10"
                        />
                        <div className="mb-2 mt-4 text-lg font-title  font-medium relative z-10">
                          FlixChat
                        </div>
                        <p className="text-sm leading-tight font-body text-chart-3 dark:text-muted-foreground relative z-10">
                          Watch and spend time with your closed ones💫
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-1">
                    <a
                      className="group flex h-full w-full hover:scale-90 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md transition-all duration-300 ease-in-out"
                      href="/login"
                    >
                      <div className="mb-2 mt-4 font-title w-[40%] group-hover:w-[80%] transition-all duration-300 h-fit flex justify-between  text-lg font-medium">
                        <p>Login</p>
                        <ArrowRight className="translate-y-1" />
                      </div>
                      <p className="text-sm leading-tight font-body text-muted-foreground">
                        Proceed to login 🧑‍💻
                      </p>
                    </a>
                  </li>
                  <li className="row-span-1">
                    <a
                      className="group flex h-full w-full select-none hover:scale-90 flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md transition-all duration-300 ease-in-out"
                      href="/signup"
                    >
                      <div className="mb-2 mt-4 w-[60%] group-hover:w-[80%] transition-all duration-300 h-fit flex justify-between  text-lg font-medium">
                        <p className="font-title">Sign Up</p>
                        <ArrowRight className="translate-y-1" />
                      </div>
                      <p className="text-sm leading-tight font-body text-muted-foreground">
                        Proceed to Sign Up. 🧑‍💻
                      </p>
                    </a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/guest" className="hover:text-primary font-title">
                  Guest Mode
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/about" className="hover:text-primary font-title">
                  About
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/settings" className="hover:text-primary font-title">
                  Settings
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
