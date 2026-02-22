import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { showErrorToast } from "@/utils/toastUtils";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()

  if (!user) {
    showErrorToast("You must be logged in to access this page");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
