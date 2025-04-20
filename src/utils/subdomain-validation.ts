
export const isValidSubdomain = (subdomain: string): boolean => {
  // Subdomain validation rules:
  // 1. Only lowercase letters, numbers, and hyphens
  // 2. Cannot start or end with a hyphen
  // 3. Length between 3-63 characters
  const subdomainRegex = /^[a-z0-9]([a-z0-9-]{1,61}[a-z0-9])?$/;
  return subdomainRegex.test(subdomain);
};

export const formatSubdomain = (subdomain: string): string => {
  return subdomain.toLowerCase().trim();
};
