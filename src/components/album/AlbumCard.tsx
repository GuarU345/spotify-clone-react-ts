import { Link } from "react-router-dom";
import { Album } from "../../types/album";
import { CardPlayButton } from "../player/CardPlayButton";

type Props = {
  album: Album;
};

export const AlbumCard = ({ album }: Props) => {
  return (
    <article className="group relative shadow-lg hover:bg-zinc-800 bg-zinc-500/30">
      <div
        className={`absolute right-4 bottom-20 translate-y-4
          transition-all duration-500 opacity-0
          group-hover:translate-y-0 group-hover:opacity-100
          z-10
        `}
      >
        <CardPlayButton id={album.id} />
      </div>
      <Link
        className="transition-all duration-300 w-44 flex flex-col relative p-2 overflow-hidden gap-2 pb-6 rounded-md"
        to={`/album/${album.id}`}
      >
        <picture className="aspect-square w-full h-auto flex-none">
          <img
            className="object-cover w-full h-full rounded-md"
            src={album.album_image}
            alt={album.name}
          />
        </picture>
        <div className="flex flex-auto flex-col px-2">
          <h4 className="text-white font-bold truncate text-sm">
            {album.name}
          </h4>

          <p className="text-xs text-gray-400 mb-6 hover:underline">
            {album.artist.name}
          </p>
        </div>
      </Link>
    </article>
  );
};
