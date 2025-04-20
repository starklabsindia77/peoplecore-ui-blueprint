
import { ReactNode } from 'react';
import { useAuth } from "@/contexts/auth-context";
import { Layout } from "@/components/Layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLocation, Link } from "react-router-dom";

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
  actions?: ReactNode;
}

export function AdminLayout({ children, title, actions }: AdminLayoutProps) {
  const { user } = useAuth();
  const location = useLocation();
  
  // Generate breadcrumbs from the current path
  const breadcrumbs = location.pathname.split('/')
    .filter(segment => segment)
    .map(segment => {
      // Convert kebab-case to Title Case
      const formatted = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return { path: segment, label: formatted };
    });
  
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            {breadcrumbs.length > 0 && (
              <Breadcrumb className="mb-2">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild className="text-primary hover:text-primary-dark">
                      <Link to="/">Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  
                  {breadcrumbs.map((crumb, index) => (
                    <BreadcrumbItem key={index}>
                      <BreadcrumbSeparator />
                      {index === breadcrumbs.length - 1 ? (
                        <BreadcrumbPage className="text-foreground">{crumb.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild className="text-primary hover:text-primary-dark">
                          <Link to={`/${breadcrumbs.slice(0, index + 1).map(b => b.path).join('/')}`}>
                            {crumb.label}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            )}
            
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{title || breadcrumbs[breadcrumbs.length - 1]?.label || "Dashboard"}</h1>
          </div>
          
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
        
        {children}
      </div>
    </Layout>
  );
}
