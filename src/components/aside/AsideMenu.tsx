import { HomeIcon, LibraryIcon, SearchIcon } from "../../icons/Icons";
import { SideMenuItem } from "./SideMenuItem";
import { SideMenuItemCard } from "./SideMenuItemCard";

const AsideMenu = () => {
  return (
    <nav className="flex flex-col flex-1 gap-2">
      <div className="bg-zinc-900 rounded-lg p-2">
        <ul>
          <SideMenuItem href="/">
            <HomeIcon />
            Home
          </SideMenuItem>
          <SideMenuItem href="/#">
            <SearchIcon />
            Search
          </SideMenuItem>
        </ul>
      </div>

      <div className="bg-zinc-900 rounded-lg p-2 flex-1">
        <ul>
          <SideMenuItem href="/">
            <LibraryIcon />
            Library
          </SideMenuItem>
          <SideMenuItemCard />
        </ul>
      </div>
    </nav>
  );
};

export default AsideMenu;
