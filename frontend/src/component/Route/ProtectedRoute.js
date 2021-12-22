import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({isAdmin, component: Component, ...rest }) {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading === false) {
    if (isAuthenticated === false) {
      return <Navigate to="/login" />;
    }
    if (isAdmin === true && user.role !== "admin") {
      return <Navigate to="/login" />;
    }

    return <Component />;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRoute;
