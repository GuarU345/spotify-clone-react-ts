import { PlaylistService } from "../services/playlists";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "sonner";
import { useInvalidateQuery } from "./useInvalidateQuery";

type UseHandleAddPlaylist = {
  handleAddPlaylist: () => Promise<void>;
};

export const useHandleAddPlaylist = (): UseHandleAddPlaylist => {
  const { userData } = useAuthStore();
  const { invalidate } = useInvalidateQuery();

  const handleAddPlaylist = async () => {
    try {
      await PlaylistService.addPlaylist(userData.token!, userData.user_id!);
      toast("Añadida a tu biblioteca");
      await invalidate("likedData");
      await invalidate("userPlaylists");
    } catch (error) {
      toast("No se pudo crear la playlist");
    }
  };

  return { handleAddPlaylist };
};
