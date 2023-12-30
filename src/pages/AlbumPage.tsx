import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useEffect } from "react";
import { AlbumSongsTable } from "../components/album/AlbumSongsTable";
import { CardPlayButton } from "../components/player/CardPlayButton";
import { AlbumLike } from "../components/album/AlbumLike";
import { useAuthStore } from "../store/useAuthStore";
import { useFetchAlbumData } from "../hooks/useFetchAlbums";
import { MUSIC_TYPES } from "../utils/helpers";
import { Banner } from "../components/Banner";

export const AlbumPage = () => {
  const { albumId } = useParams();
  const { userData } = useAuthStore();

  const {
    data: album,
    isLoading,
    refetch,
  } = useFetchAlbumData(userData.token!, albumId!);

  useEffect(() => {
    refetch();
  }, [albumId]);

  return (
    <Layout>
      {isLoading && (
        <>
          <p>Loading...</p>
        </>
      )}
      <div
        style={{
          background: `linear-gradient(to top,#18181b 40%,${album?.color})`,
        }}
        className={`relative flex flex-col h-full overflow-x-hidden z-10`}
      >
        <Banner
          image={album?.image}
          legend={album?.type}
          length={album?.songs.length}
          subparagraph={album?.artist}
          title={album?.name}
          color={album?.color}
        />
        <div className="mt-10 px-6 flex gap-10 items-center">
          <CardPlayButton id={albumId!} type={MUSIC_TYPES.ALBUM} />
          <AlbumLike albumId={albumId!} />
        </div>

        <div className="relative z-10 px-6 pt-10"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 z-[-1]"></div>

        <section className="p-6">
          <AlbumSongsTable songs={album?.songs} artist={album?.artist} />
        </section>
      </div>
    </Layout>
  );
};
