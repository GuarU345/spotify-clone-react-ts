import { HomeIcon, LibraryIcon, SearchIcon } from "../../icons/Icons";
import { SideMenuItem } from "./SideMenuItem";
import { SideMenuItemCard } from "./SideMenuItemCard";
import { AddPlaylist } from "../playlist/AddPlaylist";
import { useAuthStore } from "../../store/useAuthStore";

const AsideMenu = () => {
  const { isLogin } = useAuthStore();
  return (
    <nav className="flex flex-col flex-1 gap-2">
      <div className="bg-zinc-900 rounded-lg p-2">
        <ul>
          <SideMenuItem href={isLogin ? "/home" : "/"}>
            <HomeIcon />
            Inicio
          </SideMenuItem>
          <SideMenuItem href={isLogin ? "/search" : "/"}>
            <SearchIcon />
            Buscar
          </SideMenuItem>
        </ul>
      </div>

      <div className="bg-zinc-900 rounded-lg p-2 flex-1">
        <ul>
          <div className="flex gap-10 items-center">
            <SideMenuItem href={isLogin ? "/home" : "/"}>
              <LibraryIcon />
              Tu biblioteca
            </SideMenuItem>
            <AddPlaylist />
          </div>
          {isLogin ? <SideMenuItemCard /> : null}
        </ul>
      </div>
    </nav>
  );
};

export default AsideMenu;
