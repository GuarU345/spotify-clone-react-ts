import { usePlayerStore } from "../../store/usePlayerStore";
import { CurrentSongData } from "./CurrentSongData";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { Volume } from "./Volume";
import { SongControl } from "./SongControl";
import { usePlayer } from "../../hooks/usePlayer";

export const Player = () => {
  const { sound, isPlaying } = usePlayerStore();
  const { handlePreviousSong, handlePlay, handleNextSong } = usePlayer();

  return (
    <div className="grid grid-cols-3">
      <div>
        <CurrentSongData />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <section className="flex gap-4 items-center">
          <button
            onClick={sound && handlePreviousSong}
            className="text-3xl text-gray-400"
          >
            <MdSkipPrevious />
          </button>
          <button
            onClick={sound && handlePlay}
            className="rounded-full p-1 bg-white text-2xl text-black hover:scale-105"
          >
            {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
          </button>
          <button
            onClick={sound && handleNextSong}
            className="text-3xl text-gray-400"
          >
            <MdSkipNext />
          </button>
        </section>
        <section>
          <SongControl />
        </section>
      </div>
      <div className="flex justify-end">
        <Volume />
      </div>
    </div>
  );
};
