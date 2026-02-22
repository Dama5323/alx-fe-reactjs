import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../App';

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // If user is not authenticated, redirect to login
  // Save the location they tried to access for redirect after login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;