import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/auth-context";

interface ProtectedRouteProps {
  children: ReactNode;
  requireAuth?: boolean;
}

export const ProtectedRoute = ({ 
  children, 
  requireAuth = true 
}: ProtectedRouteProps) => {
  const { user } = useAuth();
  
  // If requireAuth is true but user is not logged in, redirect to login
  if (requireAuth && !user) {
    return <Navigate to="/login" replace />;
  }

  // If requireAuth is false and user is logged in, redirect to dashboard
  // This prevents logged-in users from accessing the login page
  if (!requireAuth && user) {
    return <Navigate to="/" replace />;
  }

  // Otherwise render the children
  return <>{children}</>;
};
