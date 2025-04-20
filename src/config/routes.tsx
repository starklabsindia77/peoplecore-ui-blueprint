
import { RouteObject } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Employees from "@/pages/Employees";
import Attendance from "@/pages/Attendance";
import Leave from "@/pages/Leave";
import Reports from "@/pages/Reports";
import Settings from "@/pages/Settings";
import Companies from "@/pages/Companies";
import Subscriptions from "@/pages/Subscriptions";
import Permissions from "@/pages/Permissions";
import Departments from "@/pages/Departments";
import Training from "@/pages/Training";
import HealthSafety from "@/pages/HealthSafety";
import Notifications from "@/pages/Notifications";
import Payroll from "@/pages/Payroll";
import LeaveConfiguration from "@/pages/LeaveConfiguration";
import MySalary from "@/pages/MySalary";
import AttendanceInfo from "@/pages/AttendanceInfo";
import Profile from "@/pages/Profile";
import Documents from "@/pages/Documents";
import Directory from "@/pages/Directory";
import Performance from "@/pages/Performance";
import Expenses from "@/pages/Expenses";
import Announcements from "@/pages/Announcements";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: (
      <ProtectedRoute requireAuth={false}>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout>
          <Index />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/companies",
    element: (
      <ProtectedRoute>
        <Layout>
          <Companies />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/employees",
    element: (
      <ProtectedRoute>
        <Layout>
          <Employees />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/attendance",
    element: (
      <ProtectedRoute>
        <Layout>
          <Attendance />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/leave",
    element: (
      <ProtectedRoute>
        <Layout>
          <Leave />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports",
    element: (
      <ProtectedRoute>
        <Layout>
          <Reports />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/settings",
    element: (
      <ProtectedRoute>
        <Layout>
          <Settings />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/subscriptions",
    element: (
      <ProtectedRoute>
        <Layout>
          <Subscriptions />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/permissions",
    element: (
      <ProtectedRoute>
        <Layout>
          <Permissions />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/departments",
    element: (
      <ProtectedRoute>
        <Layout>
          <Departments />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/training",
    element: (
      <ProtectedRoute>
        <Layout>
          <Training />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/health-safety",
    element: (
      <ProtectedRoute>
        <Layout>
          <HealthSafety />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/notifications",
    element: (
      <ProtectedRoute>
        <Layout>
          <Notifications />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/payroll",
    element: (
      <ProtectedRoute>
        <Layout>
          <Payroll />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/leave-configuration",
    element: (
      <ProtectedRoute>
        <Layout>
          <LeaveConfiguration />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/my-salary",
    element: (
      <ProtectedRoute>
        <Layout>
          <MySalary />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/attendance-info",
    element: (
      <ProtectedRoute>
        <Layout>
          <AttendanceInfo />
        </Layout>
      </ProtectedRoute>
    ),
  },
  // New employee role routes
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Layout>
          <Profile />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/documents",
    element: (
      <ProtectedRoute>
        <Layout>
          <Documents />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/directory",
    element: (
      <ProtectedRoute>
        <Layout>
          <Directory />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/performance",
    element: (
      <ProtectedRoute>
        <Layout>
          <Performance />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/expenses",
    element: (
      <ProtectedRoute>
        <Layout>
          <Expenses />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/announcements",
    element: (
      <ProtectedRoute>
        <Layout>
          <Announcements />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
