import { usePlayerStore } from "../../store/usePlayerStore";
import { CurrentSongData } from "./CurrentSongData";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { Volume } from "./Volume";
import { SongControl } from "./SongControl";

export const Player = () => {
  const { isPlaying, setIsPlaying, goNextSong, goPreviousSong, sound } =
    usePlayerStore();

  const handlePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    goNextSong();
  };
  const handlePreviousSong = () => {
    goPreviousSong();
  };
  return (
    <div className="flex justify-between items-center">
      <div>
        <CurrentSongData />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <section className="flex gap-4 items-center">
          <button
            onClick={handlePreviousSong}
            className="text-3xl text-gray-400"
          >
            <MdSkipPrevious />
          </button>
          <button
            onClick={handlePlay}
            className="rounded-full p-1 bg-white text-2xl text-black hover:scale-105"
          >
            {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
          </button>
          <button onClick={handleNextSong} className="text-3xl text-gray-400">
            <MdSkipNext />
          </button>
        </section>
        <section>
          <SongControl />
        </section>
      </div>
      <div>
        <Volume />
      </div>
    </div>
  );
};
