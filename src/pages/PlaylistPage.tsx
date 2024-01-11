import Layout from "../layouts/Layout";
import { PlaylistSongsTable } from "../components/playlist/PlaylistSongsTable";
import { useAuthStore } from "../store/useAuthStore";
import { useParams } from "react-router-dom";
import { useFetchPlaylistData } from "../hooks/useFetchPlaylists";
import { useEffect } from "react";
import { Banner } from "../components/Banner";

export const PlaylistPage = () => {
  const { playlistId } = useParams();
  const { userData } = useAuthStore();
  const {
    data: playlist,
    isLoading,
    refetch,
  } = useFetchPlaylistData(userData.token!, playlistId!, userData.user_id!);

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
      <div className="relative flex flex-col h-full overflow-x-hidden z-10 bg-gradient-to-b from-violet-600 from-20% via-zinc-950">
        <Banner
          image={playlist?.image}
          legend={playlist?.type}
          length={playlist?.songs?.length}
          subparagraph={playlist?.description}
          title={playlist?.name}
        />

        <section className="p-6">
          <PlaylistSongsTable
            songs={playlist?.songs ? playlist?.songs : []}
            playlistName={playlist?.name}
          />
        </section>
      </div>
    </Layout>
  );
};
