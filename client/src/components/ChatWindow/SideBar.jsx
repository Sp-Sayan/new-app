import {
  EllipsisVertical,
  LogOut,
  Settings,
  User,
  UserRound,
} from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import ToggleSwitch from "../ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, setSelectedUser } from "@/store/slices/userChatSlice";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state.userChat.selectedUser);
  const allChats = useSelector((state) => state.userChat.users);

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
        {allChats.map((chat) => (
          <div
            key={chat._id}
            onClick={() => {
              //set selected user
              dispatch(setSelectedUser(chat));
              //fetch the messages for the selected user
              dispatch(getMessages(chat._id));
            }}
            className={`p-4 cursor-pointer flex items-center gap-5 hover:bg-slate-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800  ${
              selectedChat?._id === chat._id ? "bg-muted" : ""
            }`}
          >
            <img
              className={cn(
                "rounded-full h-[8vh] aspect-square",
                chat.profilePic ? "" : "hidden"
              )}
              src={chat.profilePic}
              alt=""
            />
            <div
              className={cn(
                "defaultUserImage h-[8vh] aspect-square flex items-center justify-center rounded-full bg-muted text-muted-foreground",
                chat.profilePic ? "hidden" : ""
              )}
            >
              <User />
            </div>
            <p className="text-lg">{chat.userName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
