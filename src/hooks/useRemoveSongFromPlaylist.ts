import { toast } from "sonner";
import { PlaylistService } from "../services/playlists";
import { useAuthStore } from "../store/useAuthStore"
import { useInvalidateQuery } from "./useInvalidateQuery";

export const useRemoveSongFromPlaylist = () => {
    const { userData } = useAuthStore()
    const { invalidate } = useInvalidateQuery();
    const removeSongFromPlaylist = async ({ playlistId, songId }) => {
        try {
            toast.dismiss();
            await PlaylistService.removeSongOnPlaylist(
                userData.token!,
                playlistId,
                songId
            );
            toast.success("Cancion eliminada de la playlist");
            await invalidate("playlistData");
        } catch (error) {
            toast.dismiss();
            toast.error("No se pudo eliminar la cancion de la playlist");
        }
    };

    return { removeSongFromPlaylist }
}