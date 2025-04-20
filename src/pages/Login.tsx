import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("admin@acmehr.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f8f9fb]">
      {/* Left Section - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
              E
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Empora</h1>
            <p className="text-gray-600">Login to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>

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
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account? {" "}
                  <Link to="/signup" className="text-blue-600 hover:text-blue-700">
                    Create Organization
                  </Link>
                </p>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                Sign In
              </Button>
            </div>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 text-center mb-2">Demo Credentials</p>
            <div className="space-y-1 text-sm text-gray-600">
              <p className="px-3 py-1 bg-gray-50 rounded">Platform Admin: admin@acmehr.com / admin123</p>
              <p className="px-3 py-1 bg-gray-50 rounded">Company Admin: companyadmin@acmehr.com / admin123</p>
              <p className="px-3 py-1 bg-gray-50 rounded">HR Manager: hr@acmehr.com / admin123</p>
              <p className="px-3 py-1 bg-gray-50 rounded">Employee: employee@acmehr.com / admin123</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80")' }}>
        <div className="w-full h-full bg-blue-600/10 backdrop-blur-sm flex items-center justify-center">
          <div className="p-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-lg">Access your HR dashboard and manage your team efficiently</p>
          </div>
        </div>
      </div>
    </div>
  );
}
