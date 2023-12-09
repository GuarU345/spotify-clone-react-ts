import { useEffect } from "react";
import { usePlayerStore } from "../../store/usePlayerStore";
import { Slider } from "./Slider";

export const SongControl = () => {
  const { duration, progress, sound, setProgress, isPlaying } =
    usePlayerStore();

  const formatTime = (time) => {
    if (time === "0:00") return time;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSeek = (newProgress) => {
    sound.seek(newProgress);
    setProgress(newProgress);
  };

  useEffect(() => {
    const updateProgress = () => {
      setProgress(sound.seek());
      requestAnimationFrame(updateProgress);
    };

    if (isPlaying) {
      updateProgress();
    }

    if (!isPlaying) {
      cancelAnimationFrame(updateProgress);
    }

    if (sound) {
      sound.on("stop", () => {
        cancelAnimationFrame(updateProgress);
      });
    }

    // return () => {
    //   sound.unload();
    //   cancelAnimationFrame(updateProgress);
    // };
  }, [sound, setProgress]);
  return (
    <div className="flex gap-4">
      <span className="text-gray-400">{formatTime(progress)}</span>
      <Slider
        className="w-[400px] cursor-pointer"
        value={[progress]}
        min={0}
        max={[duration]}
        type="range"
        onValueChange={(value) => handleSeek(value)}
      />
      <span className="text-gray-400">{formatTime(duration)}</span>
    </div>
  );
};
