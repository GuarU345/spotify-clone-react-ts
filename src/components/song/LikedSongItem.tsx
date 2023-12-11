import { BsPlayFill } from "react-icons/bs";
import { Song, SongLiked } from "../../types/song";
import { SongLike } from "./SongLike";
import "../../styles/likedsong.css";
import { SongService } from "../../services/songs";
import { usePlayerStore } from "../../store/usePlayerStore";
import { useAuthStore } from "../../store/useAuthStore";

type Props = {
  likedSong: SongLiked;
  index: number;
};

export const LikedSongItem = ({ likedSong, index }: Props) => {
  const { token } = useAuthStore();
  const { setIsPlaying, setCurrentMusic, setCurrentSong, playMusic } =
    usePlayerStore();

  const handlePlaySong = async () => {
    const data = await SongService.getSongsByAlbumId(token, likedSong.album.id);
    const { songs, id, image, artist, name } = data;
    setIsPlaying(true);
    setCurrentMusic({
      songs,
      album: {
        id,
        name,
        image,
        artist,
      },
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
