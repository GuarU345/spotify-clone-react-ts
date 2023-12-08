import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { LikedSongsPlaylist } from "../types/playlist";
import { PlaylistService } from "../services/playlists";
import { PlaylistSongsTable } from "../components/playlist/PlaylistSongsTable";
import { useAuthStore } from "../store/useAuthStore";

export const PlaylistPage = () => {
  const [playlist, setPlaylist] = useState<LikedSongsPlaylist>();
  const { token } = useAuthStore();

  const getLikedSongsPlaylist = async () => {
    const data = await PlaylistService.getLikedSongsPlaylist(token);
    setPlaylist(data);
  };

  useEffect(() => {
    getLikedSongsPlaylist();
  }, []);
  return (
    <Layout>
      <div
        id="playlist-container"
        className="relative flex flex-col h-full bg-gradient-to-b p-4 from-violet-600 via-zinc-950 overflow-x-hidden"
      >
        <header className="flex flex-row gap-8 px-6 mt-12">
          <picture>
            <img
              className="w-52 h-52"
              src={playlist?.image}
              alt={playlist?.name}
            />
          </picture>
          <div className="flex flex-col justify-between">
            <h2 className="flex flex-1 items-end">{playlist?.type}</h2>
            <div>
              <h1 className="text-5xl font-bold block text-white">
                {playlist?.name}
                <span></span>
              </h1>
            </div>

            <div className="flex-1 flex items-end"></div>
          </div>
        </header>

        <div className="mt-10 px-6 flex gap-10 items-center"></div>

        <div className="relative z-10 px-6 pt-10"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"></div>

        <section className="p-6">
          <PlaylistSongsTable />
        </section>
      </div>
    </Layout>
  );
};
