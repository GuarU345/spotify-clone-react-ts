import { BsPlus } from "react-icons/bs";
import {
  DropdownMenu as Dropdown,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../../@/components/ui/dropdown-menu";
import { useFetchUserPlaylists } from "../hooks/useFetchPlaylists";
import { useAuthStore } from "../store/useAuthStore";
import { PlaylistService } from "../services/playlists";
import { toast } from "sonner";

export const DropdownMenu = ({ songId }: { songId: string }) => {
  const { userData } = useAuthStore();
  const { data: userPlaylists, isLoading } = useFetchUserPlaylists(
    userData.token,
    userData.user_id
  );

  const handleAddSongToPlaylist = (playlistId: string) => async () => {
    try {
      toast.dismiss();
      await PlaylistService.addSongToPlaylist(
        userData.token,
        playlistId,
        songId
      );
      toast.success("Cancion añadida a la playlist");
    } catch (error) {
      toast.dismiss();
      toast.error("No se pudo agregar la cancion a la playlist");
    }
  };
  return (
    <Dropdown>
      <DropdownMenuTrigger className="text-gray-400 hover:text-white text-2xl">
        <BsPlus />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-3 py-2 w-56 bg-zinc-800">
        <DropdownMenuLabel className="text-center">
          Añadir a la lista
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isLoading && (
          <>
            <p>Loading...</p>
          </>
        )}
        {userPlaylists?.map((userPlaylist) => (
          <DropdownMenuItem
            key={userPlaylist.id}
            onClick={handleAddSongToPlaylist(userPlaylist.id)}
            className="hover:bg-white/20 p-3 cursor-default"
          >
            <button className="px-2 text-sm">{userPlaylist.name}</button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </Dropdown>
  );
};
