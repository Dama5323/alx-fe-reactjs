import { Navigate } from "react-router-dom";

const isAuthenticated = true;

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;