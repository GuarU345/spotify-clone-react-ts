import { toast } from "sonner";
import { AuthService } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const useAuth = () => {
  const { setIsLogin, setUserData } = useAuthStore();
  const navigate = useNavigate();

  const signin = async (body) => {
    try {
      const { token, user_id } = await AuthService.signin(body);
      setIsLogin(true);
      setUserData({ token, user_id });
      navigate("/home");
      toast.success("Sesión iniciada");
    } catch (error) {
      toast("Credenciales invalidas");
    }
  };

  const signup = async (body) => {
    try {
      await AuthService.signup(body);
      navigate("/signin");
      toast.success("Usuario Registrado");
    } catch (error) {
      toast("Algo salio mal");
    }
  };

  return { signin, signup };
};
