import { useEffect } from "react";
import { usePlayerStore } from "../../store/usePlayerStore";
import { Slider } from "../Slider";

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
    let animationFrameId;
    const updateProgress = () => {
      const currentProgress = sound.seek()
      setProgress(currentProgress);
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    if (isPlaying) {
      updateProgress();
    }

    if (!isPlaying) {
      cancelAnimationFrame(animationFrameId);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);

      if (sound) {
        sound.off("stop", updateProgress);
      }
    };
  }, [sound]);

  return (
    <div className="flex gap-4">
      <p className="text-gray-400">{formatTime(progress)}</p>
      <Slider
        className="w-[400px] cursor-pointer"
        value={[Number(progress || "0")]}
        min={0}
        max={Number(duration || "0")}
        onValueChange={(value) => handleSeek(value)}
      />
      <p className="text-gray-400">{formatTime(duration)}</p>
    </div>
  );
};
