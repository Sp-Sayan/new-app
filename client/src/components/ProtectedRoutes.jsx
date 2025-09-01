import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "@/store/slices/authSlice";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";

const ProtectedRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.checkAuth);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  if (authState.isCheckingAuth && !authState.authUser) {
    return (
      <div className="w-full h-full bg-background flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return authState.authUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
