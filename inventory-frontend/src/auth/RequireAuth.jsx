import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    // save where we came from (optional)
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
