import { useQueryClient } from "react-query";
import { PlaylistService } from "../services/playlists";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "sonner";

type UseHandleAddPlaylist = {
  handleAddPlaylist: () => Promise<void>;
};

export const useHandleAddPlaylist = (): UseHandleAddPlaylist => {
  const { userData } = useAuthStore();
  const queryClient = useQueryClient();

  const handleAddPlaylist = async () => {
    try {
      await PlaylistService.addPlaylist(userData.token!, userData.user_id!);
      toast("Añadida a tu biblioteca");
      queryClient.invalidateQueries({ queryKey: "likedData" });
      queryClient.invalidateQueries({ queryKey: "userPlaylists" });
    } catch (error) {
      toast("No se pudo crear la playlist");
    }
  };

  return { handleAddPlaylist };
};
