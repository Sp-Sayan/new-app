import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "@/assets/avatar.png";
import Markdown from "react-markdown";
import { current } from "tailwindcss/colors";
import { MarkdownComponents } from "../MarkdownComponents";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ChatWindow = () => {
  //fetch messages
  const messages = useSelector((state) => state.userChat.messages);
  //fetch current logged in user
  const currentLoggedInUser = useSelector((state) => state.checkAuth.authUser);
  //fetch selected user
  const selectedUser = useSelector((state) => state.userChat.selectedUser);
  //fetch online users
  const onlineUsers = useSelector((state) => state.checkAuth.onlineUsers);

  //check for new day after a message
  const checkNewDay = (prevMessageIdx, currentMessageIdx) => {
    if (prevMessageIdx < 0) return false;

    const prevMessageDate = new Date(messages[prevMessageIdx].updatedAt);
    const currentMessageDate = new Date(messages[currentMessageIdx].updatedAt);

    return (
      prevMessageDate.getDate() !== currentMessageDate.getDate() ||
      prevMessageDate.getMonth() !== currentMessageDate.getMonth() ||
      prevMessageDate.getFullYear() !== currentMessageDate.getFullYear()
    );
  };

  const parseDate = (messageIdx) => {
    const date = new Date(messages[messageIdx].updatedAt);

    const newDate =
      months[date.getMonth() - 1] +
      " " +
      date.getDate() +
      ", " +
      date.getFullYear();

    return newDate;
  };

  const parseTime = (dateString) => {
    const date = new Date(dateString);
    const timeString = date.toLocaleTimeString("en-EN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return timeString;
  };

  return (
    <>
      <div className="chat-banner p-4 font-title text-lg border-b flex items-center gap-4">
        <img
          className="h-[8vh] aspect-square rounded-full"
          src={selectedUser?.profilePic || Avatar}
          alt=""
        />

        <div>
          <p>{selectedUser.userName}</p>
          <p className="text-xs text-muted-foreground font-body">
            {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <div className="chat-window flex-1 overflow-y-auto p-4 bg-black/30">
        <div
          className={cn(
            "message-placeholder h-full w-full text-muted-foreground/50  tracking-tighter text-4xl font-extralight flex items-center justify-center",
            messages.length === 0 ? "" : "hidden"
          )}
        >
          Start your legendary chat with {selectedUser.userName} {";)"}
        </div>
        {messages?.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.senderId === currentLoggedInUser._id
                ? "text-right"
                : "text-left"
            }`}
          >
            {checkNewDay(index - 1, index) ? (
              <div className="new-day-container my-5 w-full p-1 flex items-center justify-center ">
                <span className="py-1 px-4 text-sm text-white bg-slate-800 rounded-lg">
                  {parseDate(index)}
                </span>
              </div>
            ) : (
              ""
            )}

            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                message.senderId === currentLoggedInUser._id
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {message.image ? (
                <img
                  className="h-[50vh] p-2 aspect-square rounded-xl cursor-pointer"
                  src={message.image}
                  alt=""
                  srcset=""
                />
              ) : (
                ""
              )}
              <p className={cn("text-lg", message.image ? "text-left" : "")}>
                {message.text}
              </p>

              <div
                className={cn(
                  "text-xs mt-1",
                  message.senderId === currentLoggedInUser._id
                    ? "text-muted/70"
                    : "text-muted-foreground/80"
                )}
              >
                {parseTime(message.updatedAt)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatWindow;
