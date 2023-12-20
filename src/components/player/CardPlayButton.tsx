import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { usePlayerStore } from "../../store/usePlayerStore";
import { useAuthStore } from "../../store/useAuthStore";
import { userReproducingSomething } from "../../services/user_actions";

type Props = {
  id: string;
  type: string;
};

export const CardPlayButton = ({ id, type }: Props) => {
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
  const isPlayingAlbum = isPlaying && currentMusic?.id === id;

  const handleClick = async () => {
    if (isPlayingAlbum) {
      setIsPlaying(false);
      sound.pause();
      return;
    }

    if (sound && currentMusic?.id === id) {
      setIsPlaying(true);
      sound.play();
      return;
    }

    const data = await userReproducingSomething(userData.token, id, type);
    setIsPlaying(true);
    setCurrentMusic({
      id: data.id,
      type: data.type,
      songId: data.songId,
      songs: data.songs,
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
