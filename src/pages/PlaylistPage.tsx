import Layout from "../layouts/Layout";
import { PlaylistSongsTable } from "../components/playlist/PlaylistSongsTable";
import { useAuthStore } from "../store/useAuthStore";
import { useParams } from "react-router-dom";
import { useFetchPlaylistData } from "../hooks/useFetchPlaylists";
import { useEffect } from "react";
import { PlaylistImage } from "../components/playlist/PlaylistImage";
import { Banner } from "../components/Banner";

export const PlaylistPage = () => {
  const { playlistId } = useParams();
  const { userData } = useAuthStore();
  const {
    data: playlist,
    isLoading,
    refetch,
  } = useFetchPlaylistData(userData.token!!, playlistId!);

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
        className={`relative flex flex-col h-full overflow-x-hidden z-10 ${"bg-gradient-to-b from-violet-600 via-zinc-950"}`}
      >
        <Banner
          image={playlist?.image}
          legend={playlist?.type}
          length={playlist?.songs?.length}
          subparagraph={playlist?.name}
          title={playlist?.name}
        />

        <div className="relative z-10 px-6 pt-10"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"></div>

        <section className="p-6">
          <PlaylistSongsTable songs={playlist?.songs ? playlist?.songs : []} />
        </section>
      </div>
    </Layout>
  );
};
