import { BsPlus } from "react-icons/bs";
import { PlaylistService } from "../../services/playlists";
import { useAuthStore } from "../../store/useAuthStore";
import { toast } from "sonner";
import { useQueryClient } from "react-query";

export const AddPlaylist = () => {
  const { token } = useAuthStore();
  const queryClient = useQueryClient();

  const handleAddPlaylist = async () => {
    try {
      await PlaylistService.addPlaylist(token);
      toast("Añadida a tu biblioteca");
      queryClient.invalidateQueries({ queryKey: "likedData" });
    } catch (error) {
      toast("No se pudo crear la playlist");
    }
  };
  return (
    <button onClick={handleAddPlaylist} className="text-3xl text-gray-400">
      <BsPlus />
    </button>
  );
};
