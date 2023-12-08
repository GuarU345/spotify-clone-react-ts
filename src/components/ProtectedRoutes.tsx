import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  children?: ReactElement;
  isAllowed: boolean;
};

export const ProtectedRoutes = ({ children, isAllowed }: Props) => {
  if (!isAllowed) return <Navigate to={"/signin"} />;

  return children ? children : <Outlet />;
};
