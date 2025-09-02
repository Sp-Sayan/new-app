import { EllipsisVertical, LogOut, Settings, UserRound } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import ToggleSwitch from "../ToggleSwitch";

const Sidebar = ({ recentChats, selectedChat, onSelectChat }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    {
      icon: <UserRound className="w-5 h-5" />,
      label: "Profile",
      href: "/profile",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      href: "/settings",
    },
    { icon: <LogOut className="w-5 h-5" />, label: "Log Out", href: "/logout" },
  ];

  return (
    <div className="w-2/5 border-r bg-background">
      <div className="p-4 font-bold text-lg border-b flex justify-between">
        <p className="font-title">FlixChat</p>
        <div className="flex gap-2">
          <ToggleSwitch />
          <span className="flex flex-col">
            <EllipsisVertical onClick={toggleMenu} className="cursor-pointer" />
            <div
              className={cn(
                "font-light py-2 border  rounded-2xl bg-background absolute top-[3rem] left-[24rem] transition-all delay-75 shadow-md",
                showMenu ? "" : "hidden"
              )}
            >
              <ul className="w-[7rem] cursor-pointer">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-muted w-full pl-2 text-muted-foreground text-[0.8em] flex items-center gap-2"
                  >
                    {item.icon}
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </span>
        </div>
      </div>
      <div className="font-title">
        {recentChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`p-4 cursor-pointer ${
              selectedChat === chat.id
                ? "bg-muted"
                : "hover:bg-muted-foreground hover:text-background"
            }`}
          >
            {chat.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
