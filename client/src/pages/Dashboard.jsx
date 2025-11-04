import ChatWindow from "@/components/ChatWindow/ChatWindow";
import Messageinput from "@/components/ChatWindow/Messageinput";
import Sidebar from "@/components/ChatWindow/SideBar";
import { getUsers } from "@/store/slices/userChatSlice";
import { MessageCircleMoreIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setDarkMode } from "@/store/slices/themeSlice";
import Loader from "@/components/Loader";

const Dashboard = () => {
  const selectedChat = useSelector((state) => state.userChat.selectedUser);
  const dispatch = useDispatch();
  const [videoLoaded, setVideoLoaded] = useState(false);

  //fetch user for sidebar
  useEffect(() => {
    //set default theme to dark
    dispatch(setDarkMode());

    handleFetchAllUsers();
  }, []);

  const handleFetchAllUsers = async () => {
    dispatch(getUsers());
    //console.log("response from fetch users: ", allChats);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="video-container h-full w-full flex items-center justify-center hide-scrollbar">
      <video
        className="absolute h-full w-full object-cover -z-50"
        src="/dashboardBg.mp4"
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={handleVideoLoaded}
      ></video>
      {!videoLoaded ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="dashboard rounded-2xl bg-background dark:bg-transparent dark:backdrop-blur-[500px] flex relative h-[95%] w-[95%]">
          <Sidebar />
          <div className="flex flex-col w-full">
            {selectedChat ? (
              <>
                <ChatWindow />
                <Messageinput />
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-5 flex-1">
                <MessageCircleMoreIcon
                  strokeWidth={1}
                  className="text-muted-foreground h-[10vh] w-[20vw] font-extralight animate-bounce"
                />
                <p className="text-muted-foreground font-extralight text-4xl ">
                  Welcome to FlixChat
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
