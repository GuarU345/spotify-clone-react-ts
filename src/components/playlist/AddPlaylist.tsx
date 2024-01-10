import { BsPlus } from "react-icons/bs";
import { useHandleAddPlaylist } from "../../hooks/useHandleAddPlaylist";
import { useAuthStore } from "../../store/useAuthStore";
import { toast } from "sonner";

export const AddPlaylist = () => {
  const { isLogin } = useAuthStore();
  const { handleAddPlaylist } = useHandleAddPlaylist();
  const notAuthorizedAction = () => {
    toast("No tienes acceso a esta funcion");
  };
  return (
    <button
      onClick={isLogin ? handleAddPlaylist : notAuthorizedAction}
      className="text-3xl text-gray-400"
    >
      <BsPlus />
    </button>
  );
};
