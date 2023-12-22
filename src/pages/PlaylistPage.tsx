import Layout from "../layouts/Layout";
import { PlaylistSongsTable } from "../components/playlist/PlaylistSongsTable";
import { useAuthStore } from "../store/useAuthStore";
import { useParams } from "react-router-dom";
import { useFetchPlaylistData } from "../hooks/useFetchPlaylists";
import { useEffect } from "react";
import { PlaylistImage } from "../components/playlist/PlaylistImage";

export const PlaylistPage = () => {
  const { playlistId } = useParams();
  const { userData } = useAuthStore();
  const {
    data: playlist,
    isLoading,
    refetch,
  } = useFetchPlaylistData(userData.token, playlistId!);

  useEffect(() => {
    refetch();
  }, [playlistId]);
  return (
    <Layout>
      {isLoading && (
        <>
          <p>Loading...</p>
        </>
      )}
      <div
        id="playlist-container"
        className="relative flex flex-col h-full bg-gradient-to-b p-4 from-violet-600 via-zinc-950 overflow-x-hidden"
      >
        <header className="flex flex-row gap-8 px-6 mt-12">
          <PlaylistImage
            name={playlist?.name}
            description={playlist?.description}
            image={playlist?.image}
          />
          <div className="flex flex-col justify-end gap-6">
            <div>
              <h2>{playlist?.type}</h2>
              <h1 className="text-5xl font-bold block text-white">
                {playlist?.name}
              </h1>
            </div>
            <div>
              <p className="text-gray-400">{playlist?.description}</p>
              <p>{playlist?.songs?.length} canciones</p>
            </div>
          </div>
        </header>

        <div className="mt-10 px-6 flex gap-10 items-center"></div>

        <div className="relative z-10 px-6 pt-10"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"></div>

        <section className="p-6">
          <PlaylistSongsTable songs={playlist?.songs ? playlist?.songs : []} />
        </section>
      </div>
    </Layout>
  );
};
