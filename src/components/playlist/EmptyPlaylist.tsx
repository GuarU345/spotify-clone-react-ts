import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/useAuthStore";
import { SongService } from "../../services/songs";
import { PlaylistSong } from "../../types/song";
import { useAddSongToPlaylist } from "../../hooks/useAddSongToPlaylist";
import { useParams } from "react-router-dom";

export const EmptyPlaylist = () => {
  const [results, setResults] = useState<PlaylistSong[]>([]);
  const { register, handleSubmit } = useForm();
  const { userData } = useAuthStore();
  const { playlistId } = useParams();
  const { addSongToPlaylist } = useAddSongToPlaylist();
  const handleSearchSong = handleSubmit(async (formData) => {
    if (formData.search === "") {
      setResults([]);
      return;
    }
    const result = await SongService.searchSongsForYourPlaylist(
      userData.token,
      formData.search
    );
    setResults(result);
  });

  return (
    <div>
      <hr />
      <p className="mt-4 font-bold text-lg">Encontremos algo para tu lista</p>
      <form onSubmit={handleSearchSong}>
        <input
          type="text"
          className="p-2 bg-zinc-700 rounded-sm mt-4"
          placeholder="Busca canciones para tu playlist"
          {...register("search")}
        />
      </form>
      {results.length !== null
        ? results.map((item) => (
            <section
              className="grid grid-cols-[500px,1fr,auto] items-center"
              key={item.id}
            >
              <div className="flex pt-5 px-6 gap-2 items-center ">
                <picture>
                  <img
                    src={item.album.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-md"
                  />
                </picture>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.artist.name}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-400">{item.album.name}</p>
              </div>
              <div>
                <button
                  onClick={() =>
                    addSongToPlaylist({
                      playlistId: playlistId!,
                      songId: item.id,
                    })
                  }
                  className="rounded-3xl border-2 w-20 text-sm border-gray-400 p-2"
                >
                  Añadir
                </button>
              </div>
            </section>
          ))
        : null}
    </div>
  );
};
