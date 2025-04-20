
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/auth-context';
import { getCurrentTenant } from '@/lib/tenant-utils';

interface TenantRouteProps {
  children: ReactNode;
  requireAuth?: boolean;
  allowedRoles?: string[];
}

export const TenantRoute = ({ 
  children, 
  requireAuth = true,
  allowedRoles = [] 
}: TenantRouteProps) => {
  const { user } = useAuth();
  const location = useLocation();
  const currentTenant = getCurrentTenant();
  
  // If requireAuth is true but user is not logged in, redirect to login
  if (requireAuth && !user) {
    return <Navigate 
      to={currentTenant ? `/${currentTenant}/login` : '/login'} 
      state={{ from: location }} 
      replace 
    />;
  }

  // If user is logged in and there are allowedRoles specified
  if (user && allowedRoles.length > 0) {
    // Check if user has one of the allowed roles
    if (!allowedRoles.includes(user.role)) {
      // Redirect to dashboard if user doesn't have permission
      return <Navigate 
        to={currentTenant ? `/${currentTenant}/` : '/'} 
        replace 
      />;
    }
  }

  // If user is logged in, they have the correct company, and they have the correct role (or no role is required)
  return <>{children}</>;
};
