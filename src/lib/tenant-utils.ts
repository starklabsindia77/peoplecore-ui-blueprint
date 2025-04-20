
// Helper functions to work with tenant-aware routes

/**
 * Get the current tenant from URL
 */
export const getCurrentTenant = (): string | null => {
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  
  // Handle routes like /[tenant]/dashboard
  if (pathSegments.length > 0 && !pathSegments[0].includes('.')) {
    return pathSegments[0];
  }
  
  // Handle subdomains
  const hostname = window.location.hostname;
  const parts = hostname.split('.');
  if (parts.length > 2 && parts[0] !== 'www') {
    return parts[0];
  }
  
  return null;
};

/**
 * Build a tenant-aware route path
 */
export const buildTenantPath = (tenant: string | null, path: string): string => {
  if (!tenant) return path;
  
  // If path already starts with the tenant, don't duplicate
  if (path.startsWith(`/${tenant}`)) {
    return path;
  }
  
  return `/${tenant}${path.startsWith('/') ? path : `/${path}`}`;
};

/**
 * Get path without tenant prefix
 */
export const stripTenantFromPath = (path: string): string => {
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0) {
    return '/' + segments.slice(1).join('/');
  }
  return '/';
};
