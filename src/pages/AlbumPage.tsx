import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import { AlbumsService } from "../services/albums";
import { useEffect, useState } from "react";
import { AlbumData } from "../types/album";

export const AlbumPage = () => {
  const [album, setAlbum] = useState<AlbumData>();
  const { id } = useParams();

  const getAlbumDataById = async () => {
    const data = await AlbumsService.getAlbumDataById(id!);
    setAlbum(data);
  };

  useEffect(() => {
    getAlbumDataById();
  }, [id]);
  return (
    <Layout>
      {album ? (
        <div
          id="playlist-container"
          style={{
            background: `linear-gradient(to top,#18181b 45%,${album.color} 55%)`,
          }}
          className={`relative flex flex-col h-full overflow-x-hidden`}
        >
          <header className="flex flex-row gap-8 px-6 mt-12">
            <picture>
              <img src={album.image} alt={album.name} title={album.name} />
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
                    {/* <span className="text-white">
                    {numberSongs}
                    {numberSongs > 1 ? "canciones" : "cancion"}
                  </span> */}
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className="mt-10 px-6 flex gap-10 items-center">
            {/* <CardPlayButton client:visible id={album.id} />
      <AlbumLike client:visible id={album.id} /> */}
          </div>

          <div className="relative z-10 px-6 pt-10"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"></div>

          <section className="p-6">
            {/* <SongsTable
        songs={album.songs}
        likeds={likedSongIds}
        artist={album.artist}
      /> */}
          </section>
        </div>
      ) : null}
    </Layout>
  );
};