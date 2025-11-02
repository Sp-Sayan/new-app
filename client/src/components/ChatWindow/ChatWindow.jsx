import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Avatar from "@/assets/avatar.png";
const ChatWindow = () => {
  //fetch messages
  const messages = useSelector((state) => state.userChat.messages);
  //fetch current logged in user
  const currentLoggedInUser = useSelector((state) => state.checkAuth.authUser);
  //fetch selected user
  const selectedUser = useSelector((state) => state.userChat.selectedUser);
  //fetch online users
  const onlineUsers = useSelector((state) => state.checkAuth.onlineUsers);

  return (
    <>
      <div className="p-4 font-title text-lg border-b bg-background flex items-center gap-4">
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
      <div className="flex-1 overflow-y-auto p-4 bg-background">
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
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                message.senderId === currentLoggedInUser._id
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {message.text}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {message.timestamps}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatWindow;
