import { useEffect } from "react";
import { usePlayerStore } from "../../store/usePlayerStore";

export const CurrentSongData = () => {
  const { currentMusic, currentSong } = usePlayerStore();

  const songInfo = currentMusic.songs[currentSong];

  useEffect(() => {}, [currentSong]);
  return (
    <>
      {currentMusic ? (
        <div className="flex gap-2 text-white items-center">
          <picture>
            <img
              className="h-16 w-16 rounded-md"
              src={
                currentMusic.album?.image
                  ? currentMusic.album?.image
                  : "https://w0.peakpx.com/wallpaper/180/958/HD-wallpaper-black-plain.jpg"
              }
              alt={currentMusic.album?.name}
            />
          </picture>
          <div className="flex flex-col">
            <h4>{songInfo?.name}</h4>
            <p className="text-gray-400 text-sm">
              {currentMusic.album?.artist}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};
