
export interface OrganizationRegistration {
  // Basic Information
  companyName: string;
  industry: string;
  companySize: string;
  registrationNumber?: string;

  // Contact Information
  primaryContactName: string;
  businessEmail: string;
  phoneNumber: string;
  businessAddress: string;

  // Admin Details
  adminName: string;
  adminEmail: string;
  password: string;
  role: 'company_admin';

  // Subscription
  plan: 'basic' | 'pro' | 'enterprise';
  
  // Optional Information
  logo?: File | null;
  subdomain: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  }
}
