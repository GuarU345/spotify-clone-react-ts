import { useEffect, useState } from "react";
import { AlbumCard } from "./AlbumCard";
import { AlbumsService } from "../services/albums";
import { Album } from "../types/album";

export const MainSection = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const getAlbums = async () => {
    const data = await AlbumsService.getAlbums();
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
          {/* <MainPlaylistCard /> */}
        </div>
        <div className="flex flex-wrap mt-6 gap-4">
          {albums.length > 0
            ? albums.map((album) => <AlbumCard album={album} />)
            : null}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"></div>
      </main>

      <style></style>
    </main>
  );
};
