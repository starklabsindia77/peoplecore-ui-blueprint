
import { Routes, Route } from "react-router-dom";
import { Providers } from "./components/Providers";
import { routes } from "./config/routes";
import { TenantRoute } from "./components/TenantRoute";
import { getCurrentTenant } from "./lib/tenant-utils";
import { lazy, Suspense } from "react";

// Lazy load some larger components for performance
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const currentTenant = getCurrentTenant();

  return (
    <Providers>
      <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
        <Routes>
          {/* Standard routes */}
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}

          {/* Tenant-aware routes */}
          {currentTenant && (
            <>
              <Route path={`/${currentTenant}/signup`} element={<TenantRoute requireAuth={false}><Signup /></TenantRoute>} />
              <Route path={`/${currentTenant}/login`} element={<TenantRoute requireAuth={false}><Login /></TenantRoute>} />
              {/* Add other tenant-aware routes here */}
            </>
          )}
        </Routes>
      </Suspense>
    </Providers>
  );
};

export default App;
