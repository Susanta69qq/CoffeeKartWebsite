import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or render a loading spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
