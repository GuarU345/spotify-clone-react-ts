import { BsPlayFill } from "react-icons/bs";
import { Song, SongLiked } from "../../types/song";
import { SongLike } from "../song/SongLike";
import "../../styles/likedsong.css";
import { usePlayerStore } from "../../store/usePlayerStore";
import { useAuthStore } from "../../store/useAuthStore";
import { userReproducingSomething } from "../../services/user_actions";
import { useParams } from "react-router-dom";
import { MUSIC_TYPES } from "../../utils/helpers";

type Props = {
  likedSong: SongLiked;
  index: number;
};

export const PlaylistSongItem = ({ likedSong, index }: Props) => {
  const { userData } = useAuthStore();
  const { playlistId } = useParams();
  const { setIsPlaying, setCurrentMusic, setCurrentSong, playMusic } =
    usePlayerStore();

  const handlePlaySong = async () => {
    const data = await userReproducingSomething(
      userData.token,
      playlistId!,
      MUSIC_TYPES.PLAYLIST
    );
    const { id, type, songs } = data;
    setIsPlaying(true);
    setCurrentMusic({
      data: id,
      songId: likedSong.song.id,
      type,
      songs,
    });
    const songIndex = songs.findIndex(
      (song: Song) => song.id === likedSong.song.id
    );
    setCurrentSong(songIndex);
    playMusic();
  };
  return (
    <tr className="index-row text-gray-300 text-sm hover:cursor-pointer hover:bg-white/10">
      <td className="px-4 py-2 whitespace-no-wrap">
        <p className="number-song text-base text-gray-50 opacity-70">
          {index + 1}
        </p>
        <p
          onClick={handlePlaySong}
          title={`Reproducir ${likedSong.song.name} de ${likedSong.artist.name}`}
          className="play-icon text-base"
        >
          <BsPlayFill />
        </p>
      </td>
      <td className="px-4 py-2 whitespace-no-wrap">
        <div className="flex flex-row gap-2">
          <img
            src={likedSong.album.image}
            width={50}
            height={50}
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
          <SongLike liked={likedSong.liked} songId={likedSong.song.id} />
        </p>
      </td>
      <td className="px-4 py-2">{likedSong.song.duration}</td>
    </tr>
  );
};
