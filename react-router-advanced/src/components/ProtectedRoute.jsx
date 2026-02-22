import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';  // ✅ useAuth hook imported

const ProtectedRoute = () => {
  const { user } = useAuth();  // ✅ useAuth hook used
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