import { useEffect } from "react";
import { usePlayerStore } from "../../store/usePlayerStore";

export const CurrentSongData = () => {
  const { currentMusic, currentSong } = usePlayerStore();
  let songInfo;
  if (currentMusic.id !== null) {
    songInfo = currentMusic.songs![currentSong];
  }

  useEffect(() => {}, [currentSong]);
  return (
    <>
      {songInfo ? (
        <div className="flex gap-2 text-white items-center">
          <picture>
            <img
              className="h-16 w-16 rounded-md"
              src={
                songInfo.album?.image
                  ? songInfo.album?.image
                  : "https://w0.peakpx.com/wallpaper/180/958/HD-wallpaper-black-plain.jpg"
              }
              alt={songInfo.album?.name}
            />
          </picture>
          <div className="flex flex-col">
            <h4>{songInfo?.name}</h4>
            <p className="text-gray-400 text-sm">{songInfo.artist?.name}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};
