import ChatWindow from "@/components/ChatWindow/ChatWindow";
import Messageinput from "@/components/ChatWindow/Messageinput";
import Sidebar from "@/components/ChatWindow/SideBar";
import React, { useState } from "react";


const Settings = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [messageInput, setMessageInput] = useState("");
    const [conversations, setConversations] = useState({
        SayanPaul: [
         { sender:"user", text: "Hi", timestamp:"10:00 AM" },
         {sender: "SayanPaul", text:"Heyy", timestamp: "10:02 AM" },
        ],
        AarshiMitra: [
            {sender: "AarshiMitra", text:"Heyy", timestamp: "10:02 AM" },
        ],
    JaneSmith: [
          {sender: "JaneSmith", text:"Heyy", timestamp: "10:02 AM" },
        ],
    JohnDoe: [
          {sender: "JohnDoe", text:"Heyy", timestamp: "10:02 AM" },
        ],

    IshaJha: [
          {sender: "IshaJha", text:"Heyy", timestamp: "10:02 AM" },
        ],

    });

    const recentChats = [
        { id:"SayanPaul", name:"Sayan Paul" },
         { id:"AarshiMitra", name:"Aarshi Mitra" },
          { id:"JaneSmith", name:"Jane Smith" },
           { id:"JohnDoe", name:"John Doe" },
            { id:"IshaJha", name:"Isha Jha" },
    ];

    const handleSendMessage = () => {
        if (!messageInput.trim())
            return;

        const newMessage = {
            sender: "user",
            text: messageInput,
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
            minute: "2-digit",
            }),
        };

        setConversations ((prev) => ({
            ...prev,
            [selectedChat]: [...(prev[selectedChat] || []), newMessage],
        }));

        setMessageInput("");
    };

    return (
        <div className="flex h-screen">
            <Sidebar 
            recentChats={recentChats}
            selectedChat={selectedChat}
            onSelectChat={setSelectedChat}
            />
            <div className="flex flex-col w-3/4">
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
                <div className="flex items-senter justify-center flex-1">
                    <p className="text-gray-500">Select a chat to start messaging</p>
                </div>
            )}
        </div>
        </div>
    );
};

export default Settings;

