import { userReproducingSomething } from "../services/user_actions";
import { useAuthStore } from "../store/useAuthStore";
import { usePlayerStore } from "../store/usePlayerStore";
import { Song } from "../types/song";
import { MUSIC_TYPES } from "../utils/helpers";

export const usePlaySong = () => {
  const { userData } = useAuthStore();
  const {
    setCurrentMusic,
    setCurrentSong,
    playMusic,
    setIsPlaying,
    sound,
    currentMusic,
  } = usePlayerStore();

  const playUniqueSong = async (id: string, songId: string, type: string) => {
    const data = await userReproducingSomething(userData.token!!, id, type);
    setIsPlaying(true);
    setCurrentMusic({
      id: data.id,
      songId: songId,
      type: data.type,
      songs: data.songs,
    });
    const songIndex = data.songs.findIndex((song: Song) => song.id === songId);
    setCurrentSong(songIndex);
    playMusic();
  };

  const playAlbumOrPlaylist = async (
    id: string,
    type: string,
    isPlayingAlbum: boolean
  ) => {
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

    const data = await userReproducingSomething(userData.token!!, id, type);
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

  return { playUniqueSong, playAlbumOrPlaylist };
};
