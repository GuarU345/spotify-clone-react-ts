import { UserPanel } from "./user/UserPanel";
import { Greetings } from "./Greetings";
import { Playlists } from "./playlist/Playlists";
import { Albums } from "./album/Albums";

export const MainSection = () => {

  return (
    <main id="playlist-container" className="relative">
      <main className="flex flex-col gap-4 relative z-10 px-6 pt-10">
        <div className="flex flex-col gap-10">
          <div className="flex justify-end">
            <UserPanel />
          </div>
          <Greetings />
        </div>
        <Playlists />
        <Albums />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-800 via-zinc-900/80 -z-[1]"></div>
      </main>
    </main>
  );
};
