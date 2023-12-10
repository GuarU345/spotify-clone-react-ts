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
    <button
      onClick={handleLogout}
      className="text-black w-24 text-sm font-bold bg-white p-2 rounded-3xl"
    >
      Logout
    </button>
  );
};
