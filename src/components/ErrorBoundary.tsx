
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundaryClass extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="flex h-screen flex-col items-center justify-center p-4 text-center">
          <div className="mb-6 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h1 className="mb-2 text-3xl font-bold">Something went wrong</h1>
          <p className="mb-6 text-gray-600">We're sorry for the inconvenience. Please try refreshing the page.</p>
          <Button onClick={() => window.location.reload()}>Refresh Page</Button>
          {this.state.error && process.env.NODE_ENV === 'development' && (
            <div className="mt-8 max-w-2xl overflow-auto rounded border border-red-200 bg-red-50 p-4 text-left">
              <p className="font-mono text-sm text-red-800">{this.state.error.toString()}</p>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

// This wrapper component allows us to use hooks with ErrorBoundary
export const ErrorBoundary: React.FC<Props> = (props) => {
  return <ErrorBoundaryClass {...props} />;
};

// Custom hook for programmatically reporting errors
export const useErrorHandler = () => {
  const { toast } = useToast();
  
  const handleError = (error: unknown) => {
    console.error(error);
    
    // Show toast notification
    toast({
      title: "An error occurred",
      description: error instanceof Error ? error.message : "Please try again later",
      variant: "destructive",
    });
  };
  
  return { handleError };
};
