import React from "react";
import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom"

function ProtectedRoute({ component: Component, ...rest }) {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if(!loading && isAuthenticated){
      return <Component />
  }
  return <Navigate to="/login" />
}

export default ProtectedRoute;
