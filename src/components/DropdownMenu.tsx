import { BsPlus } from "react-icons/bs";
import { MdMoreHoriz } from "react-icons/md";
import {
  DropdownMenu as Dropdown,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu";

export const DropdownMenu = () => {
  return (
    <Dropdown>
      <DropdownMenuTrigger>
        <button>
          <MdMoreHoriz />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <BsPlus className="text-gray-400" size={25} />
          <p>Añadir a lista</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </Dropdown>
  );
};
