import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export const UserPanel = () => {
  const { setIsLogin, setToken } = useAuthStore();
  const navigate = useNavigate();
  const handleLogout = async () => {
    setIsLogin(false);
    setToken(null);
    navigate("/signin");
  };
  return (
    <button onClick={handleLogout} className="text-gray-400">
      Logout
    </button>
  );
};
