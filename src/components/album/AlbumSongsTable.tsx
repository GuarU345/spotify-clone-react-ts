import { IoTimeOutline } from "react-icons/io5";
import { LikedSongs } from "../../types/song";
import { SongLike } from "../song/SongLike";
import { DropdownSongMenu } from "../DropdownSongMenu";
import { useParams } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import { usePlaySong } from "../../hooks/usePlaySong";
import { MUSIC_TYPES } from "../../utils/helpers";

type Props = {
  songs: LikedSongs[];
  artist: string;
};

export const AlbumSongsTable = ({ songs, artist }: Props) => {
  const { albumId } = useParams();
  const { playUniqueSong } = usePlaySong();

  return (
    <table className="table-auto min-w-full text-left divide-y divide-gray-100/50">
      <thead>
        <tr className="text-gray-300 text-sm">
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Titulo</th>
          <th className="px-4 py-2">
            <span className="text-xl">
              <IoTimeOutline />
            </span>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {songs?.map((song, index) => (
          <tr
            key={song.id}
            className="index-row text-gray-300 text-sm hover:cursor-pointer hover:bg-white/10"
          >
            <td className="px-4 py-2 whitespace-no-wrap">
              <p className="number-song text-base text-gray-50 opacity-70">
                {index + 1}
              </p>
              <p
                onClick={() =>
                  playUniqueSong(albumId!, song.id, MUSIC_TYPES.ALBUM)
                }
                title={`Reproducir ${song.name} de ${song.name}`}
                className="play-icon text-base"
              >
                <BsPlayFill />
              </p>
            </td>
            <td className="px-4 py-2 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-bold">{song.name}</span>
                <p className="text-gray-400">{artist}</p>
              </div>
              <SongLike liked={song.liked} songId={song.id} />
            </td>
            <td className="px-4 py-2">{song.duration}</td>
            <td>
              <DropdownSongMenu songId={song.id} type={MUSIC_TYPES.ALBUM} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
