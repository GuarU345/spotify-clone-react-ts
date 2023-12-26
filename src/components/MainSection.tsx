import { useEffect, useState } from "react";
import { AlbumCard } from "./album/AlbumCard";
import { AlbumsService } from "../services/albums";
import { Album } from "../types/album";
import { useAuthStore } from "../store/useAuthStore";
import { UserPanel } from "./user/UserPanel";
import { useFetchUserPlaylists } from "../hooks/useFetchPlaylists";
import { PlaylistCard } from "./playlist/PlaylistCard";

export const MainSection = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { userData } = useAuthStore();
  const { data: playlists, isLoading } = useFetchUserPlaylists(
    userData.token!,
    userData.user_id!
  );

  const getAlbums = async () => {
    const data = await AlbumsService.getAlbums(userData.token!);
    setAlbums(data);
  };

  useEffect(() => {
    getAlbums();
  }, []);
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
          {isLoading && <p>Loading...</p>}
          <div className="flex gap-2">
            {playlists?.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap mt-6 gap-4">
          {albums.length > 0
            ? albums.map((album) => <AlbumCard key={album.id} album={album} />)
            : null}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-emerald-800 via-zinc-900/80 -z-[1]"></div>
      </main>

      <style></style>
    </main>
  );
};
