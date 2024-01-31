import {
  DropdownMenu as Dropdown,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu";
import { AddOptions } from "./AddOptions";
import { SuspensivePoints } from "../icons/Icons";
import { BsPlus } from "react-icons/bs";
import { MUSIC_TYPES } from "../utils/constants";
import { RemoveSong } from "./playlist/RemoveSong";
import { onlyCreatedPlaylistsCanBeModified } from "../utils/functions";

export const DropdownSongMenu = ({ songId, type, playlistName }: { songId: string, type: string, playlistName: string }) => {
  return (
    <Dropdown>
      <DropdownMenuTrigger className="text-gray-400 hover:text-white text-2xl">
        <SuspensivePoints />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-3 py-1 w-56 bg-zinc-800 z-20">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex gap-2 hover:bg-white/20 p-2 cursor-default">
            <BsPlus className="text-gray-400" size={25} />
            <p>Añadir a lista</p>
          </DropdownMenuSubTrigger>
          <AddOptions songId={songId} />
        </DropdownMenuSub>
        {type === MUSIC_TYPES.PLAYLIST && onlyCreatedPlaylistsCanBeModified(playlistName) && <RemoveSong songId={songId} />}
      </DropdownMenuContent>
    </Dropdown>
  );
};
