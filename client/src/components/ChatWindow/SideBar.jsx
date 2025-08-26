import React from "react";

const Sidebar = ({ recentChats, selectedChat, onSelectChat}) => {

return (
  <div className="w-1/4 bg-gray-100 border-r">
    <div className="p-4 font-bold text-lg border-b">Chats</div>
    <div>
      {recentChats.map((chat) => (
        <div
        key={chat.id}
        onClick={() => onSelectChat(chat.id)}
        className={`p-4 cursor-pointer ${
          selectedChat === chat.id ? "bg-gray-200" : "hover:bg-gray-100"
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