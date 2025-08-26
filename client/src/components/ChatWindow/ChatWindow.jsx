import React from "react";
const ChatWindow = ({ selectedChat, conversations, recentChats }) => {
  const chatName = recentChats.find((chat) => chat.id === selectedChat)?.name;

  return (
    <> 
    <div className="p-4 font-bold border-b bg-gray-50">{chatName} </div>
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
    {conversations[selectedChat]?.map((message, index)  => (
      <div
      key={index}
      className={`mb-4 ${
        message.sender === "user" ? "text-right" : "text-left"
      }`}
      >
      <div
      className={`inline-block px-4 py-2 rounded-lg ${
        message.sender === "user"
        ? "bg-blue-500 text-white"
        : "bg-gray-200 text-black"
      }`}
>
  {message.text}
</div>
     <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
    </div>
    ))}
    </div>
    </>
  );
};

export default ChatWindow;