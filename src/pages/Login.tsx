
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Eye, EyeOff, Lock, User } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("admin@acmehr.com");
  const [password, setPassword] = useState("admin123");
  const [userType, setUserType] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
            P
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PeopleCore</h1>
          <p className="text-gray-600">Login to access your account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Login</h2>
            <p className="text-sm text-gray-600">Choose your account type and enter your credentials</p>
          </div>

          {/* User Type Selection */}
          <RadioGroup
            className="flex gap-4 mb-6 p-1 bg-gray-50 rounded-md"
            value={userType}
            onValueChange={setUserType}
          >
            <div className={`flex-1 text-center p-2 rounded ${userType === 'admin' ? 'bg-white shadow-sm' : ''}`}>
              <RadioGroupItem value="admin" id="admin" className="hidden" />
              <label htmlFor="admin" className="text-sm font-medium cursor-pointer block">
                Admin
              </label>
            </div>
            <div className={`flex-1 text-center p-2 rounded ${userType === 'employee' ? 'bg-white shadow-sm' : ''}`}>
              <RadioGroupItem value="employee" id="employee" className="hidden" />
              <label htmlFor="employee" className="text-sm font-medium cursor-pointer block">
                Employee
              </label>
            </div>
          </RadioGroup>

          {/* Email Input */}
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-600">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
              Sign In
            </Button>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500 text-center mb-2">Demo Credentials</p>
          <div className="space-y-1 text-sm text-gray-600">
            <p className="px-3 py-1 bg-gray-50 rounded">HR Admin: admin@acmehr.com / admin123</p>
            <p className="px-3 py-1 bg-gray-50 rounded">Employee: employee@acmehr.com / welcome@123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
