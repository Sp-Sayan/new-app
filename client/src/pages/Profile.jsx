import React from 'react'
import { MagicCard } from "@/components/magicui/magic-card";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ImageUp } from 'lucide-react';

const Profile = () => {
  return (
    <div className="signup-container h-full w-full flex flex-col items-center">
      <RetroGrid />
        <MagicCard
          className=" h-fit mt-4 w-[30%] flex-col items-center border border-border justify-center whitespace-nowrap text-4xl cursor-default"
          gradientColor={
            localStorage.getItem("theme") === "dark" ? "#262626" : "#D9D9D955"
          }
        >
          <form
            action=""
            class="p-4 flex-col text-[0.5em] gap-4  max-w-sm bg-transparent rounded-x1 w-25 text-foreground flex justify-center items-center min-h-fit"
          >


            <h1 className="text-[1.5em]  font-bold text-foreground font-title">
              My Profile
            </h1>

            <div class="flex flex-col gap-6 items-center justify-center mt-6">
              <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-black-500 shadow-lg">
                <img src="https://via.placeholder.com/150" alt="DP" class="w-full h-full object-cover">

                </img>
              </div>
              <ImageUp className='border-1 border-primary cursor-pointer'/>
            </div>

            <input
              type="text"
              className="border-b p-2 h-[40px] mt-2 w-full font-body bg-transparent placeholder:text-foreground border-foreground border-opacity-38"
              placeholder="Username"
            />

            <input
              type="email"
              className="border-b p-2 h-[40px] w-full font-body bg-transparent placeholder:text-foreground border-foreground border-opacity-38"
              placeholder="Email"
            />

            <input
              type="text"
              className="border-b p-2 h-[40px] w-full bg-transparent placeholder:text-foreground border-foreground border-opacity-38"
              placeholder="About"
            />


            <InteractiveHoverButton type="submit" className="group">
              Log Out
            </InteractiveHoverButton>

            <div className="flex w-full justify-evenly ">
              <button className=" w-1/4 hover:bg-primary transition-all duration-300 ease-in-out flex justify-center items-center border   rounded-xl py-2 ">
                <svg
                  class="w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
                </svg>
              </button>
              <button className=" flex w-1/4 hover:bg-primary duration-300 ease-in-out  border justify-center items-center  bg-opacity-25 rounded-xl py-2 hover ">
                <svg
                  class="w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path>
                </svg>
              </button>

              <button className=" flex w-1/4 border hover:bg-primary transition-all duration-300 justify-center items-center  bg-opacity-25 rounded-xl py-2 hover">
                <svg
                  class="w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                </svg>
              </button>
            </div>
           {/*<label for="dp-upload" class="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-md cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536M9 11l3.536-3.536a2 2 0 012.828 0l3.536 3.536a2 2 0 010 2.828L15 18H9v-6z" />
    </svg>
  </label>*/}
          
          </form>
        </MagicCard>
      </div>
   
  )
}

export default Profile
