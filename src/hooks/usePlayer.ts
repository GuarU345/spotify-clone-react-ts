import { usePlayerStore } from "../store/usePlayerStore";

export const usePlayer = () => {
  const { isPlaying, setIsPlaying, goNextSong, goPreviousSong, sound } =
    usePlayerStore();

  const handlePlay = () => {
    isPlaying ? sound.pause() : sound.play();

    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    if (!isPlaying) {
      setIsPlaying(true)
    }
    goNextSong()
  };

  const handlePreviousSong = () => {
    if (!isPlaying) {
      setIsPlaying(true)
    }
    goPreviousSong()
  };

  return { handleNextSong, handlePreviousSong, handlePlay };
};
