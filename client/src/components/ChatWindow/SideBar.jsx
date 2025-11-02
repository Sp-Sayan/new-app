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
import Avatar from "@/assets/avatar.png";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state.userChat.selectedUser);
  const allChats = useSelector((state) => state.userChat.users);

  //TODO: fetch online users
  const onlineUsers = useSelector((state) => state.checkAuth.onlineUsers);

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
            <div className="image-container relative h-fit w-fit  ">
              <img
                className="rounded-full h-[8vh] aspect-square"
                src={chat.profilePic || Avatar}
                alt=""
              />
              <span
                className={cn(
                  "h-2 absolute top-0 right-0 aspect-square rounded-full bg-green-400",
                  onlineUsers.includes(chat._id) ? "" : "hidden"
                )}
              ></span>
            </div>

            <div className="name-container ">
              <p className="text-lg">{chat.userName}</p>
              <p className="text-xs font-body text-muted-foreground">
                {onlineUsers.includes(chat._id) ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
