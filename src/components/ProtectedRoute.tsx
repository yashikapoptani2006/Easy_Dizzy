import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

interface ProtectedRouteProps {
  children: ReactNode;
  requireAuth?: boolean;
}

const ProtectedRoute = ({ children, requireAuth = true }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem("easydizzy_auth") === "true";

  if (requireAuth && !isAuthenticated) {
    toast.info("Please sign in to access this page");
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
