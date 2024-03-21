import { Link } from "react-router-dom";
import { PlaylistInfo } from "../../types/playlist";
import { CardPlayButton } from "../player/CardPlayButton";
import { MUSIC_TYPES } from "../../utils/constants";

interface Props {
  playlist?: PlaylistInfo;
  haveSongs: boolean
}

export const PlaylistCard = ({ playlist, haveSongs }: Props) => {
  return (
    <>
      {haveSongs && <article className="flex group relative shadow-lg hover:bg-white/20 bg-zinc-500/30 rounded-md">
        <div
          className={`absolute right-2  translate-y-2
          transition-all duration-500 opacity-0
           group-hover:opacity-100
          z-10
          `}
        >
          <CardPlayButton id={playlist?.id!} type={MUSIC_TYPES.PLAYLIST} />
        </div>
        <Link
          className="transition-all duration-300 xl:w-[300px] 2xl:w-[400px] flex items-center relative p-1 overflow-hidden gap-2"
          to={`/playlist/${playlist?.id}`}
        >
          <picture>
            <img
              className="w-14 h-14 rounded-md"
              src={playlist?.image}
              alt={playlist?.name}
            />
          </picture>
          <div className="flex flex-col text-white">
            <p className="text-sm font-semibold">{playlist?.name}</p>
          </div>
        </Link>
      </article>}
    </>
  );
};
