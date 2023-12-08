import { Navigate } from "react-router-dom";
import { Signin } from "../pages/auth/Signin";

export const Auth = ({ isLogin }: { isLogin: boolean }) => {
  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return <Signin />;
};
