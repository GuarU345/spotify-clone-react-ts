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
import { MUSIC_TYPES } from "../utils/helpers";
import { RemoveSong } from "./playlist/RemoveSong";

export const DropdownSongMenu = ({ songId, type }: { songId: string, type: string }) => {
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
          <DropdownMenuPortal>
            <AddOptions songId={songId} />
          </DropdownMenuPortal>
        </DropdownMenuSub>
        {type === MUSIC_TYPES.PLAYLIST && <RemoveSong songId={songId} />}
      </DropdownMenuContent>
    </Dropdown>
  );
};
