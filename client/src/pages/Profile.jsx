import React, { useEffect, useState } from "react";
import { ArrowLeft, Camera, Mail, User } from "lucide-react";
import Avatar from "@/assets/avatar.png";
import { useDispatch, useSelector } from "react-redux";

import { RetroGrid } from "@/components/magicui/retro-grid";
import { updateProfile } from "@/store/slices/authSlice";
import toast from "react-hot-toast";

const Profile = () => {
  const userState = useSelector((state) => state.checkAuth);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    console.log(userState.authUser);
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file || !file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      await dispatch(
        updateProfile({
          profilePic: base64Image,
        })
      );
      setSelectedImage(base64Image);
      //console.log(base64Image);
    };
  };

  return (
    <div className="h-full w-full pt-10 bg-background">
      <RetroGrid />
      <div className="max-w-2xl mx-auto p-4 py-8 backdrop-blur-3xl border rounded-xl">
        <a href="/dashboard">
          <ArrowLeft />
        </a>
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold font-title">Profile</h1>
            <p className="mt-2">Your Profile Information </p>
          </div>

          {/*avatar upload section*/}

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImage || userState.authUser?.profilePic || Avatar}
                alt="Profile"
                className="size-32 rounded-full object-cover border-4"
              />
              <label
                htmlFor="avatar-upload"
                className={`
          absolute bottom-0 right-0
          bg-base-content hover:scale-105
          p-2 rounded-full cursor-pointer
          transition-all duration-200 
          ${
            userState.isUpdatingProfile
              ? "animate-pulse pointer-events-none"
              : ""
          }
          `}
              >
                <div className="h-fit w-fit rounded-full bg-primary p-2 flex justify-center items-center">
                  <Camera className="w-5 h-5 text-base-200" />
                </div>
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={userState.isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {userState.isUpdatingProfile
                ? "Uploading..."
                : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2 font-title">
                <User className="w-4 h-4" />
                Username
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {userState.authUser?.userName}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2 font-title">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {userState.authUser?.email}
              </p>
            </div>
          </div>

          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium mb-4 font-title">
              Account Information
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700 font-title">
                <span>Member since</span>
                <span>{userState.authUser?.createdAt.substring(0, 10)}</span>
              </div>
              <div className="flex items-center justify-between py-2 font-title">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
