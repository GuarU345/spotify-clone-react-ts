import { toast } from "sonner";
import { PlaylistService } from "../services/playlists";
import { useAuthStore } from "../store/useAuthStore";
import { useQueryClient } from "react-query";

export const useAddSongToPlaylist = () => {
  const { userData } = useAuthStore();
  const queryClient = useQueryClient();
  const addSongToPlaylist = async ({ playlistId, songId }) => {
    try {
      toast.dismiss();
      await PlaylistService.addSongToPlaylist(
        userData.token!,
        playlistId,
        songId
      );
      toast.success("Cancion añadida a la playlist");
      await queryClient.invalidateQueries({ queryKey: "playlistData" });
    } catch (error) {
      toast.dismiss();
      toast.error("No se pudo agregar la cancion a la playlist");
    }
  };

  return { addSongToPlaylist };
};
