import { useEffect } from "react";
import { usePlayerStore } from "../../store/usePlayerStore";
import { BsVolumeDown } from "react-icons/bs";
import { Slider } from "./Slider";

export const Volume = () => {
  const { sound, changeVolume, volume, setVolume } = usePlayerStore();

  const handleChange = (value) => {
    const newVolume = value / 100;
    setVolume(newVolume);
    changeVolume(newVolume);
  };

  useEffect(() => {
    if (sound !== null) {
      setVolume(sound.volume());
    }
  }, [sound]);
  return (
    <div className="flex items-center">
      <button type="button">
        <BsVolumeDown className="text-2xl text-gray-400 hover:text-white" />
      </button>
      <Slider
        className="w-[95px]"
        defaultValue={[volume]}
        max={100}
        min={0}
        onValueChange={handleChange}
      />
    </div>
  );
};
