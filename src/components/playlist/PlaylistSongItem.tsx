import { BsPlayFill } from "react-icons/bs";
import { SongLiked } from "../../types/song";
import { SongLike } from "../song/SongLike";
import "../../styles/likedsong.css";
import { useParams } from "react-router-dom";
import { DropdownSongMenu } from "../DropdownSongMenu";
import { usePlaySong } from "../../hooks/usePlaySong";
import { MUSIC_TYPES } from "../../utils/constants";

type Props = {
  likedSong: SongLiked;
  index: number;
  playlistName: string
};

export const PlaylistSongItem = ({ likedSong, index, playlistName }: Props) => {
  const { playlistId } = useParams();
  const { playUniqueSong } = usePlaySong();

  return (
    <>
      <tr className="index-row text-gray-300 text-sm hover:cursor-pointer hover:bg-white/10">
        <td className="px-4 py-2 whitespace-no-wrap">
          <p className="number-song text-base text-gray-50 opacity-70">
            {index + 1}
          </p>
          <p
            onClick={() =>
              playUniqueSong(
                playlistId!,
                likedSong.song.id,
                MUSIC_TYPES.PLAYLIST
              )
            }
            title={`Reproducir ${likedSong.song.name} de ${likedSong.artist.name}`}
            className="play-icon"
          >
            <BsPlayFill size={20} />
          </p>
        </td>
        <td className="px-4 py-2 whitespace-no-wrap">
          <div className="flex flex-row gap-2">
            <img
              src={likedSong.album.image}
              className="w-10 h-10 rounded-md"
              alt={likedSong.album.name}
            />
            <div className="flex-col">
              <strong className="text-white">{likedSong.song.name}</strong>
              <p className="text-gray-400">{likedSong.artist.name}</p>
            </div>
          </div>
        </td>
        <td className="px-4 py-2 whitespace-no-wrap text-gray-50 opacity-70">
          {likedSong.album.name}
        </td>
        <td>
          <p
            title="Eliminar de Tu biblioteca"
            className="text-green-500 text-base hover:cursor-pointer"
          >
            <SongLike liked={likedSong.song.liked} songId={likedSong.song.id} />
          </p>
        </td>
        <td className="px-4 py-2">{likedSong.song.duration}</td>
        <td>
          <DropdownSongMenu songId={likedSong.song.id} type={MUSIC_TYPES.PLAYLIST} playlistName={playlistName} />
        </td>
      </tr>
    </>
  );
};
