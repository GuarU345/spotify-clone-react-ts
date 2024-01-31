import { useFetchUserPlaylists } from "../hooks/useFetchPlaylists";
import { useHandleAddPlaylist } from "../hooks/useHandleAddPlaylist";
import { useAddSongToPlaylist } from "../hooks/useAddSongToPlaylist";
import { useAuthStore } from "../store/useAuthStore";
import { DropdownMenuItem, DropdownMenuPortal, DropdownMenuSubContent } from "../../@/components/ui/dropdown-menu";
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
      <DropdownMenuPortal>
        <DropdownMenuSubContent className="flex flex-col gap-3 py-1 w-56 bg-zinc-800 z-20">
          <DropdownMenuItem
            onClick={handleAddPlaylist}
            className="hover:bg-white/20 p-2 cursor-default"
          >
            <BsPlus className="text-gray-400" size={25} /> <p className="text-white">Crear lista</p>
          </DropdownMenuItem>
          {userPlaylists?.map((userPlaylist) => (
            <DropdownMenuItem
              key={userPlaylist.id}
              onClick={() =>
                addSongToPlaylist({ playlistId: userPlaylist.id, songId })
              }
              className="hover:bg-white/20 p-3 cursor-default"
            >
              <button className="px-2 text-sm text-white">{userPlaylist.name}</button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </>
  );
};
