import ChatWindow from "@/components/ChatWindow/ChatWindow";
import Messageinput from "@/components/ChatWindow/Messageinput";
import Sidebar from "@/components/ChatWindow/SideBar";
import { getUsers } from "@/store/slices/userChatSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const dispatch = useDispatch();
  const [conversations, setConversations] = useState({
    SayanPaul: [
      { sender: "user", text: "Hi", timestamp: "10:00 AM" },
      { sender: "SayanPaul", text: "Heyy", timestamp: "10:02 AM" },
    ],
    AarshiMitra: [
      { sender: "AarshiMitra", text: "Heyy", timestamp: "10:02 AM" },
    ],
    JaneSmith: [{ sender: "JaneSmith", text: "Heyy", timestamp: "10:02 AM" }],
    JohnDoe: [{ sender: "JohnDoe", text: "Heyy", timestamp: "10:02 AM" }],

    IshaJha: [{ sender: "IshaJha", text: "Heyy", timestamp: "10:02 AM" }],
  });

  const allChats = useSelector((state) => state.userChat.users);

  //fetch user for sidebar
  useEffect(() => {
    handleFetchAllUsers();
  }, []);

  const handleFetchAllUsers = async () => {
    dispatch(getUsers());
    console.log("response from fetch users: ", allChats);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage = {
      sender: "user",
      text: messageInput,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setConversations((prev) => ({
      ...prev,
      [selectedChat]: [...(prev[selectedChat] || []), newMessage],
    }));

    setMessageInput("");
  };

  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        {selectedChat ? (
          <>
            <ChatWindow
              selectedChat={selectedChat}
              conversations={conversations}
              recentChats={recentChats}
            />
            <Messageinput
              messageInput={messageInput}
              onMessageChange={setMessageInput}
              onSendMessage={handleSendMessage}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center flex-1">
            <p className="text-gray-500 font-extralight text-4xl ">
              Welcome to FlixChat
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
