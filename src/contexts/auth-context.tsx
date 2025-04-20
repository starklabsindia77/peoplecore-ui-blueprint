
import { createContext, useContext, useState, useEffect } from "react";
import { User, UserRole, Company } from "@/lib/auth-types";
import { useNavigate } from "react-router-dom";

// Mock companies
const MOCK_COMPANIES: Record<string, Company> = {
  "company1": {
    id: "company1",
    name: "Acme Corp",
    subscriptionStatus: "active",
    subscriptionPlan: "pro",
    trialEndsAt: "2025-05-20",
  },
  "company2": {
    id: "company2",
    name: "Tech Solutions",
    subscriptionStatus: "trial",
    subscriptionPlan: "basic",
    trialEndsAt: "2025-05-01",
  },
};

// Mock users with company data
const MOCK_USERS: Record<string, User> = {
  "admin@acmehr.com": {
    id: "1",
    name: "Platform Admin",
    email: "admin@acmehr.com",
    role: "platform_admin",
    companyId: "company1",
    company: MOCK_COMPANIES["company1"],
  },
  "companyadmin@acmehr.com": {
    id: "2",
    name: "Company Admin",
    email: "companyadmin@acmehr.com",
    role: "company_admin",
    companyId: "company1",
    company: MOCK_COMPANIES["company1"],
  },
  "hr@acmehr.com": {
    id: "3",
    name: "HR Manager",
    email: "hr@acmehr.com",
    role: "company_hr",
    companyId: "company1",
    company: MOCK_COMPANIES["company1"],
  },
  "employee@acmehr.com": {
    id: "4",
    name: "John Employee",
    email: "employee@acmehr.com",
    role: "company_employee",
    companyId: "company1",
    company: MOCK_COMPANIES["company1"],
  },
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const mockUser = MOCK_USERS[email];
    if (!mockUser) {
      throw new Error("Invalid credentials");
    }
    // In a real app, we would validate the password here
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
