
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("admin@acmehr.com");
  const [password, setPassword] = useState("admin123");

  return (
    <div className="min-h-screen flex">
      {/* Left illustration column */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-50 items-center justify-center p-12">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Welcome to PeopleCore</h1>
          <p className="text-blue-700">Your complete HR management solution</p>
        </div>
      </div>

      {/* Right login column */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600">
              Access your HR dashboard
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full"
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full"
              />
            </div>

            <Button className="w-full" size="lg">
              Sign in
            </Button>
          </form>

          <div className="mt-8">
            <p className="text-sm text-gray-500 text-center mb-4">Demo Credentials</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>HR Admin: admin@acmehr.com / admin123</p>
              <p>Employee: employee@acmehr.com / welcome@123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
