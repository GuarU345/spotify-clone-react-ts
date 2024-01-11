import { Link, Navigate } from "react-router-dom";
import { AlbumCardTest } from "../components/test/AlbumCardTest";
import Layout from "../layouts/Layout";

const albums = [
  {
    id: 1,
    name: "Album1",
    album_image:
      "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2",
    artist: {
      name: "Artista1",
    },
  },
  {
    id: 2,
    name: "Album2",
    album_image:
      "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2",
    artist: {
      name: "Artista2",
    },
  },
  {
    id: 3,
    name: "Album3",
    album_image:
      "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2",
    artist: {
      name: "Artista3",
    },
  },
];

export const TestPage = ({ isLogin }: { isLogin: boolean }) => {
  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return (
    <Layout>
      <main id="playlist-container" className="relative">
        <main className="flex flex-col gap-4 relative z-10 px-6 pt-10">
          <div className="flex flex-col gap-10">
            <div className="flex justify-end gap-2">
              <Link to="/signup">
                <button className="text-black w-24 text-sm font-bold bg-white p-2 rounded-3xl">
                  Signup
                </button>
              </Link>
              <Link to="/signin">
                <button className="text-black w-24 text-sm font-bold bg-white p-2 rounded-3xl">
                  Signin
                </button>
              </Link>
            </div>
            <p className="text-2xl">Buenos Dias</p>
          </div>
          <div>
            <div className="flex gap-2">
              <p>
                Para poder acceder a las demas funciones debes iniciar sesion
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-6 gap-4">
            {albums.length > 0
              ? albums.map((album) => (
                  <AlbumCardTest key={album.id} album={album} />
                ))
              : null}
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-emerald-800 via-zinc-900/80 -z-[1]"></div>
        </main>
      </main>
    </Layout>
  );
};
