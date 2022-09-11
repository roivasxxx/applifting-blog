import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export type ProtectedRouteProps = {
  user: string | undefined | null;
  redirectPath?: string;
  children?: React.ReactElement;
};

export default function ProtectedRoute({
  user,
  redirectPath = "/home",
  children,
}: ProtectedRouteProps): React.ReactElement {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
}
