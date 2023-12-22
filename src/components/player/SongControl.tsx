import { useEffect } from "react";
import { usePlayerStore } from "../../store/usePlayerStore";
import { Slider } from "../../../@/components/ui/slider";

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
      setProgress(sound.seek());
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
        value={[parseInt(progress || "0")]}
        min={0}
        max={parseInt(duration || "0")}
        onValueChange={(value) => handleSeek(value)}
      />
      <p className="text-gray-400">{formatTime(duration)}</p>
    </div>
  );
};
