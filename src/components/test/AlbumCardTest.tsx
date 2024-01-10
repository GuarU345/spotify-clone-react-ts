import { CardPlayButtonTest } from "./CardPlayButtonTest";

type Props = {
  album: {
    name: string;
    album_image: string;
    artist: {
      name: string;
    };
  };
};

export const AlbumCardTest = ({ album }: Props) => {
  return (
    <article className="group relative shadow-lg hover:bg-zinc-800 bg-zinc-500/30">
      <div
        className={`absolute right-4 bottom-20 translate-y-4
      transition-all duration-500 opacity-0
      group-hover:translate-y-0 group-hover:opacity-100
      z-10
    `}
      >
        <CardPlayButtonTest />
      </div>
      <div className="transition-all duration-300 w-44 flex flex-col relative p-2 overflow-hidden gap-2 pb-6 rounded-md">
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
      </div>
    </article>
  );
};
