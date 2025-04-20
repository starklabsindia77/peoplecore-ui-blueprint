
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { isValidSubdomain, formatSubdomain } from '@/utils/subdomain-validation';
import { Mail, Globe, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [companyName, setCompanyName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!companyName.trim()) {
      toast({
        title: "Error",
        description: "Company name is required",
        variant: "destructive"
      });
      return;
    }

    const formattedSubdomain = formatSubdomain(subdomain);
    if (!isValidSubdomain(formattedSubdomain)) {
      toast({
        title: "Invalid Subdomain",
        description: "Subdomain must be 3-63 characters, only lowercase letters, numbers, and hyphens",
        variant: "destructive"
      });
      return;
    }

    // Mock signup process
    toast({
      title: "Signup Successful",
      description: `Company ${companyName} registered with subdomain ${formattedSubdomain}`
    });

    // In a real implementation, this would call Supabase signup
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
            <p className="text-gray-600">Set up your company account</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="space-y-4">
              <div className="relative">
                <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>

              <div className="relative">
                <Globe className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <div className="flex">
                  <Input
                    type="text"
                    placeholder="Subdomain"
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value)}
                    className="pl-10 rounded-r-none"
                    required
                  />
                  <div className="bg-gray-100 px-3 flex items-center border rounded-r-md">
                    .empora.dev
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Your company's unique URL will be companyname.empora.dev</p>
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Company Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                Create Organization
              </Button>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Already have an account? {" "}
                  <Link to="/login" className="text-blue-600 hover:text-blue-700">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
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
