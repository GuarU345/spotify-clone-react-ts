import { AlbumCard } from "./album/AlbumCard";
import { useAuthStore } from "../store/useAuthStore";
import { UserPanel } from "./user/UserPanel";
import { useFetchUserPlaylists } from "../hooks/useFetchPlaylists";
import { PlaylistCard } from "./playlist/PlaylistCard";
import { useFetchAlbums } from "../hooks/useFetchAlbums";

export const MainSection = () => {
  const { userData } = useAuthStore();
  const { data: playlists, isLoading: isLoadingPlaylists } =
    useFetchUserPlaylists(userData.token!, userData.user_id!);
  const { data: albums, isLoading: isLoadingAlbums } = useFetchAlbums(
    userData.token!
  );

  return (
    <main id="playlist-container" className="relative">
      <main className="flex flex-col gap-4 relative z-10 px-6 pt-10">
        <div className="flex flex-col gap-10">
          <div className="flex justify-end">
            <UserPanel />
          </div>
          <p className="text-2xl">Buenos Dias</p>
        </div>
        <div>
          {isLoadingPlaylists && <p>Loading...</p>}
          <div className="grid grid-cols-3 gap-2">
            {playlists?.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>
        {isLoadingAlbums && <p>Loading...</p>}
        <div className="flex flex-wrap mt-6 gap-4">
          {albums?.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-emerald-800 via-zinc-900/80 -z-[1]"></div>
      </main>
    </main>
  );
};
