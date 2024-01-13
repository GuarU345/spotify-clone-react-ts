import { useFetchUserPlaylists } from "../hooks/useFetchPlaylists";
import { useHandleAddPlaylist } from "../hooks/useHandleAddPlaylist";
import { useAddSongToPlaylist } from "../hooks/useAddSongToPlaylist";
import { useAuthStore } from "../store/useAuthStore";
import { DropdownMenuItem } from "../../@/components/ui/dropdown-menu";
import { BsPlus } from "react-icons/bs";

export const AddOptions = ({ songId }: { songId: string }) => {
  const { userData } = useAuthStore();
  const { data: userPlaylists, isLoading } = useFetchUserPlaylists(
    userData.token!,
    userData.user_id!
  );
  const { handleAddPlaylist } = useHandleAddPlaylist();
  const { addSongToPlaylist } = useAddSongToPlaylist();

  return (
    <>
      {isLoading && (
        <>
          <p>Loading...</p>
        </>
      )}
      <DropdownMenuItem
        onClick={handleAddPlaylist}
        className="hover:bg-white/20 p-3 cursor-default"
      >
        <BsPlus className="text-gray-400" size={25} /> Crear lista
      </DropdownMenuItem>
      {userPlaylists?.map((userPlaylist) => (
        <DropdownMenuItem
          key={userPlaylist.id}
          onClick={() =>
            addSongToPlaylist({ playlistId: userPlaylist.id, songId })
          }
          className="hover:bg-white/20 p-3 cursor-default"
        >
          <button className="px-2 text-sm">{userPlaylist.name}</button>
        </DropdownMenuItem>
      ))}
    </>
  );
};
