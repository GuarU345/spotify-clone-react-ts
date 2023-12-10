import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import { AlbumsService } from "../services/albums";
import { useEffect, useState } from "react";
import { AlbumData } from "../types/album";
import { AlbumSongsTable } from "../components/album/AlbumSongsTable";
import { CardPlayButton } from "../components/player/CardPlayButton";
import { AlbumLike } from "../components/album/AlbumLike";
import { useAuthStore } from "../store/useAuthStore";

export const AlbumPage = () => {
  const [album, setAlbum] = useState<AlbumData>();
  const [numberSongs, setNumberSongs] = useState(0);
  const { id } = useParams();
  const { token } = useAuthStore();

  const getAlbumDataById = async () => {
    const data = await AlbumsService.getAlbumDataById(token, id!);
    setAlbum(data);
    setNumberSongs(data.songs.length);
  };

  useEffect(() => {
    getAlbumDataById();
  }, [id]);
  return (
    <Layout>
      {album ? (
        <div
          style={{
            background: `linear-gradient(to top,#18181b 45%,${album.color} 55%)`,
          }}
          className={`relative flex flex-col h-full overflow-x-hidden z-10`}
        >
          <header className="flex flex-row gap-8 px-6 mt-12">
            <picture>
              <img
                className="w-52 h-52"
                src={album.image}
                alt={album.name}
                title={album.name}
              />
            </picture>
            <div className="flex flex-col justify-between">
              <h2 className="flex flex-1 items-end">{album.type}</h2>
              <div>
                <h1 className="text-5xl font-bold block text-white">
                  {album.name}
                  <span></span>
                </h1>
              </div>

              <div className="flex-1 flex items-end">
                <div className="text-sm text-gray-300 font-normal">
                  <div>
                    <span>{album.artist}</span>
                  </div>
                  <p className="mt-1">
                    <span className="text-white">
                      {numberSongs}
                      {numberSongs > 1 ? "canciones" : "cancion"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className="mt-10 px-6 flex gap-10 items-center">
            <CardPlayButton id={album.id} />
            <AlbumLike albumId={album.id} />
          </div>

          <div className="relative z-10 px-6 pt-10"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 z-[-1]"></div>

          <section className="p-6">
            <AlbumSongsTable songs={album.songs} artist={album.artist} />
          </section>
        </div>
      ) : null}
    </Layout>
  );
};
