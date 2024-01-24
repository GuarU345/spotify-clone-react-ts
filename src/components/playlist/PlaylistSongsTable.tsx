import { IoTimeOutline } from "react-icons/io5";
import { PlaylistSongItem } from "./PlaylistSongItem";
import { CardPlayButton } from "../player/CardPlayButton";
import { useParams } from "react-router-dom";
import { INITIAL_PLAYLIST_NAME, MUSIC_TYPES } from "../../utils/helpers";
import { EmptyPlaylist } from "./EmptyPlaylist";

export const PlaylistSongsTable = ({ songs, playlistName }) => {
  const { playlistId } = useParams();

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-full w-[50px] h-[50px] bg-green-500 grid place-content-center hover:scale-105">
        <CardPlayButton id={playlistId!} type={MUSIC_TYPES.PLAYLIST} />
      </div>
      {songs?.length === 0 && playlistName !== INITIAL_PLAYLIST_NAME ? (
        <EmptyPlaylist />
      ) : (
        <>
          <table className="min-w-full table-auto text-left divide-y divide-gray-100/50">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Titulo</th>
                <th className="px-4 py-2">Álbum</th>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">
                  <IoTimeOutline />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {songs?.map((song, index: number) => (
                <PlaylistSongItem
                  key={song.song.id}
                  likedSong={song}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
