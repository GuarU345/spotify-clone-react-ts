import { useEffect, useState } from "react";
import { AlbumCard } from "./album/AlbumCard";
import { AlbumsService } from "../services/albums";
import { Album } from "../types/album";
import { PlaylistCard } from "./playlist/PlaylistCard";
import { useAuthStore } from "../store/useAuthStore";

export const MainSection = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { token } = useAuthStore();

  const getAlbums = async () => {
    const data = await AlbumsService.getAlbums(token);
    setAlbums(data);
  };

  useEffect(() => {
    getAlbums();
  }, []);
  return (
    <main id="playlist-container" className="relative">
      <main className="flex flex-col gap-4 relative z-10 px-6 pt-10">
        <div className="flex flex-col gap-10">
          <p className="text-2xl">Buenos Dias</p>
          <PlaylistCard />
        </div>
        <div className="flex flex-wrap mt-6 gap-4">
          {albums.length > 0
            ? albums.map((album) => <AlbumCard key={album.id} album={album} />)
            : null}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"></div>
      </main>

      <style></style>
    </main>
  );
};
