import {
  DropdownMenu as Dropdown,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu";
import { AddOptions } from "./AddOptions";
import { SuspensivePoints } from "../icons/Icons";
import { BsPlus } from "react-icons/bs";
import { SlTrash } from "react-icons/sl";

export const DropdownMenu = ({ songId }: { songId: string }) => {
  return (
    <Dropdown>
      <DropdownMenuTrigger className="text-gray-400 hover:text-white text-2xl">
        <SuspensivePoints />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-3 py-2 w-56 bg-zinc-800 z-20">
        <DropdownMenuItem className="flex gap-2 hover:bg-white/20 p-2 cursor-default">
          <BsPlus className="text-gray-400" size={25} />
          <p>Añadir a lista</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 hover:bg-white/20 p-2 cursor-default">
          <SlTrash className="text-gray-400" size={18} />
          <p>Quitar de esta lista</p>
        </DropdownMenuItem>
        {/* <AddOptions songId={songId} /> */}
      </DropdownMenuContent>
    </Dropdown>
  );
};
