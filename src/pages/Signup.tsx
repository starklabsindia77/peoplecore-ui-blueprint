
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { isValidSubdomain, formatSubdomain } from '@/utils/subdomain-validation';
import { Mail, Globe, Building2, Lock, Phone, User, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StepIndicator } from '@/components/signup/StepIndicator';
import type { OrganizationRegistration } from '@/types/organization';

const STEPS = ['Basic Info', 'Contact', 'Admin', 'Plan', 'Optional'];

const INDUSTRY_OPTIONS = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Other'
];

const COMPANY_SIZE_OPTIONS = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '501-1000',
  '1000+'
];

const PLAN_OPTIONS = [
  { id: 'basic', name: 'Basic', price: '$10/month', features: ['Basic features', 'Email support'] },
  { id: 'pro', name: 'Pro', price: '$29/month', features: ['All Basic features', 'Priority support', 'Advanced analytics'] },
  { id: 'enterprise', name: 'Enterprise', price: 'Custom', features: ['All Pro features', 'Custom integration', '24/7 support'] }
];

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<Partial<OrganizationRegistration>>({
    role: 'company_admin',
    socialLinks: {}
  });

  const handleInputChange = (field: keyof OrganizationRegistration, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialLinkChange = (platform: 'facebook' | 'twitter' | 'instagram', value: string) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value
      }
    }));
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleInputChange('logo', file);
    }
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0: // Basic Info
        if (!formData.companyName?.trim() || !formData.industry || !formData.companySize) {
          toast({
            title: "Required Fields Missing",
            description: "Please fill in all required fields",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 1: // Contact
        if (!formData.primaryContactName?.trim() || !formData.businessEmail?.trim() || 
            !formData.phoneNumber?.trim() || !formData.businessAddress?.trim()) {
          toast({
            title: "Required Fields Missing",
            description: "Please fill in all required fields",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 2: // Admin
        if (!formData.adminName?.trim() || !formData.adminEmail?.trim() || !formData.password?.trim()) {
          toast({
            title: "Required Fields Missing",
            description: "Please fill in all required fields",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 3: // Plan
        if (!formData.plan) {
          toast({
            title: "Required Fields Missing",
            description: "Please select a plan",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 4: // Optional
        const subdomain = formatSubdomain(formData.subdomain || '');
        if (!isValidSubdomain(subdomain)) {
          toast({
            title: "Invalid Subdomain",
            description: "Subdomain must be 3-63 characters, only lowercase letters, numbers, and hyphens",
            variant: "destructive"
          });
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    // Mock signup process
    toast({
      title: "Registration Successful",
      description: `Organization ${formData.companyName} has been registered`
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="relative">
              <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Company Name"
                value={formData.companyName || ''}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="pl-10"
                required
              />
            </div>

            <div className="space-y-2">
              <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRY_OPTIONS.map((industry) => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Company Size" />
                </SelectTrigger>
                <SelectContent>
                  {COMPANY_SIZE_OPTIONS.map((size) => (
                    <SelectItem key={size} value={size}>{size} employees</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="relative">
              <Briefcase className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Business Registration Number (Optional)"
                value={formData.registrationNumber || ''}
                onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Primary Contact Name"
                value={formData.primaryContactName || ''}
                onChange={(e) => handleInputChange('primaryContactName', e.target.value)}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Business Email"
                value={formData.businessEmail || ''}
                onChange={(e) => handleInputChange('businessEmail', e.target.value)}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phoneNumber || ''}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Business Address"
                value={formData.businessAddress || ''}
                onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Admin Name"
                value={formData.adminName || ''}
                onChange={(e) => handleInputChange('adminName', e.target.value)}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Admin Email"
                value={formData.adminEmail || ''}
                onChange={(e) => handleInputChange('adminEmail', e.target.value)}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="password"
                placeholder="Password"
                value={formData.password || ''}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="pl-10"
                required
              />
            </div>

            <p className="text-sm text-gray-500">Role: Company Admin</p>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            {PLAN_OPTIONS.map((plan) => (
              <div
                key={plan.id}
                className={`p-4 border rounded-lg cursor-pointer ${
                  formData.plan === plan.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                }`}
                onClick={() => handleInputChange('plan', plan.id)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{plan.name}</h3>
                  <span className="text-gray-600">{plan.price}</span>
                </div>
                <ul className="text-sm text-gray-600">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-1">• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="relative">
              <Globe className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Subdomain"
                  value={formData.subdomain || ''}
                  onChange={(e) => handleInputChange('subdomain', e.target.value)}
                  className="pl-10 rounded-r-none"
                  required
                />
                <div className="bg-gray-100 px-3 flex items-center border rounded-r-md">
                  .empora.dev
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Logo
              </label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Social Links (Optional)
              </label>
              {['facebook', 'twitter', 'instagram'].map((platform) => (
                <Input
                  key={platform}
                  type="url"
                  placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
                  value={formData.socialLinks?.[platform as keyof typeof formData.socialLinks] || ''}
                  onChange={(e) => handleSocialLinkChange(platform as 'facebook' | 'twitter' | 'instagram', e.target.value)}
                  className="mt-1"
                />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f8f9fb]">
      {/* Left Section - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
              E
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Your Organization</h1>
            <p className="text-gray-600">Step {currentStep + 1} of {STEPS.length}</p>
          </div>

          <StepIndicator currentStep={currentStep} steps={STEPS} />

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            {renderStep()}

            <div className="mt-6 flex justify-between">
              {currentStep > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                >
                  Back
                </Button>
              )}
              <Button
                type="button"
                className={`${currentStep === 0 ? 'w-full' : 'ml-auto'}`}
                onClick={currentStep === STEPS.length - 1 ? handleSubmit : handleNext}
              >
                {currentStep === STEPS.length - 1 ? 'Complete Registration' : 'Next'}
              </Button>
            </div>

            {currentStep === 0 && (
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Already have an account? {" "}
                  <Link to="/login" className="text-blue-600 hover:text-blue-700">
                    Log in
                  </Link>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Right Section - Image/Description */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80")' }}>
        <div className="w-full h-full bg-blue-600/10 backdrop-blur-sm flex items-center justify-center">
          <div className="p-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome to Empora</h2>
            <p className="text-lg">Create your organization and start managing your team efficiently</p>
          </div>
        </div>
      </div>
    </div>
  );
}
