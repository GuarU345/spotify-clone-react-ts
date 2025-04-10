import { AlbumImage } from "./album/AlbumImage";
import { PlaylistImage } from "./playlist/PlaylistImage";

interface Props {
  image: string;
  legend: string;
  title: string;
  subparagraph: string;
  length: number;
  color?: string;
}

export const Banner = ({
  image,
  legend,
  length,
  subparagraph,
  title,
}: Props) => {
  return (
    <header className="flex flex-row gap-8 px-6 mt-12">
      {legend === "Playlist" ? (
        <PlaylistImage name={title} image={image} description={subparagraph} />
      ) : (
        <AlbumImage name={title} image={image} />
      )}
      <div className="flex flex-col justify-between">
        <h2 className="flex flex-1 items-end">{legend}</h2>
        <div>
          <h1 className="text-5xl font-bold block text-white">
            {title}
            <span></span>
          </h1>
        </div>

        <div className="flex-1 flex items-end">
          <div className="text-sm text-gray-300 font-normal">
            <div>
              <span>{subparagraph}</span>
            </div>
            <p className="mt-1">
              <span className="text-white">
                {length > 1 && `${length} canciones`}
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
