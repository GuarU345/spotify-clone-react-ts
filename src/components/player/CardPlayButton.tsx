import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { usePlayerStore } from "../../store/usePlayerStore";
import { useState } from "react";
import { SongService } from "../../services/songs";
import { useAuthStore } from "../../store/useAuthStore";

type Props = {
  id: number;
};

export const CardPlayButton = ({ id }: Props) => {
  // const [selectedAlbum] = useState(id);
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic,
    setCurrentSong,
    playMusic,
  } = usePlayerStore();
  const { token } = useAuthStore();
  const isPlayingAlbum = isPlaying && currentMusic?.album.id === id;

  const handleClick = async () => {
    if (isPlayingAlbum) {
      setIsPlaying(false);
      return;
    }

    const data = await SongService.getSongsByAlbumId(token, Number(id));
    const { songs, id: albumId, image, artist, name } = data;
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
