import { usePlayerStore } from "../store/usePlayerStore";

export const usePlayer = () => {
  const { isPlaying, setIsPlaying, goNextSong, goPreviousSong, sound } =
    usePlayerStore();

  const handlePlay = () => {
    isPlaying ? sound.pause() : sound.play();

    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => goNextSong();

  const handlePreviousSong = () => goPreviousSong();

  return { handleNextSong, handlePreviousSong, handlePlay };
};
