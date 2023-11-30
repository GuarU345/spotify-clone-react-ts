import { ReactNode } from "react";
import "./layout.css";
import AsideMenu from "../components/AsideMenu";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div id="app" className="relative h-screen p-2 gap-2">
      <aside className="[grid-area:aside] flex flex-col overflow-y-auto">
        <AsideMenu />
      </aside>

      <main className="[grid-area:main] rounded-lg overflow-y-auto bg-zinc-900">
        {children}
      </main>

      <footer className="[grid-area:player] min-h-[70px] mt-[10px] px-2"></footer>
    </div>
  );
};

export default Layout;
