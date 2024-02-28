import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { usePlayerStore } from "../../store/usePlayerStore";

export const UserPanel = () => {
  const { setIsLogin, setUserData } = useAuthStore();
  const { sound, setIsPlaying, setCurrentMusic, setCurrentSong, setProgress } = usePlayerStore();
  const navigate = useNavigate();
  const handleLogout = async () => {
    setIsLogin(false);
    setUserData({ token: null, user_id: null });
    if (sound) {
      sound.stop();
      setIsPlaying(false)
      setCurrentSong(undefined)
      setProgress(null)
      setCurrentMusic({ id: null, songId: null, songs: null, type: null })
    }
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
