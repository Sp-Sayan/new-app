import { checkAuth } from "@/store/slices/authSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.checkAuth);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return !authState.authUser ? children : <Navigate to="/dashboard" />;
};

export default PublicRoutes;
