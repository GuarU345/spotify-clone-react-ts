import { useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

export const CardPlayButtonTest = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="rounded-full bg-green-500 p-3 text-2xl text-black hover:scale-105 hover:bg-green-400"
    >
      {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
    </button>
  );
};
