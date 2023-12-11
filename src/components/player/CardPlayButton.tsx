import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { usePlayerStore } from "../../store/usePlayerStore";
import { SongService } from "../../services/songs";
import { useAuthStore } from "../../store/useAuthStore";

type Props = {
  id: string;
};

export const CardPlayButton = ({ id }: Props) => {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic,
    setCurrentSong,
    playMusic,
    sound,
  } = usePlayerStore();
  const { userData } = useAuthStore();
  const isPlayingAlbum = isPlaying && currentMusic?.album.id === id;

  const handleClick = async () => {
    if (isPlayingAlbum) {
      setIsPlaying(false);
      sound.pause();
      return;
    }

    const data = await SongService.getSongsByAlbumId(
      userData.token,
      Number(id)
    );
    const { songs, id: albumId, image, artist, name } = data;
    if (sound && currentMusic?.album.id === id) {
      setIsPlaying(true);
      sound.play();
      return;
    }
    setIsPlaying(true);
    setCurrentMusic({
      songs,
      album: {
        id: albumId,
        name,
        image,
        artist,
      },
    });
    setCurrentSong(0);
    playMusic();
  };
  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-green-500 p-3 text-2xl text-black hover:scale-105 hover:bg-green-400"
    >
      {isPlayingAlbum ? <BsPauseFill /> : <BsPlayFill />}
    </button>
  );
};
