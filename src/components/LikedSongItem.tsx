import { BsPlayFill } from "react-icons/bs";
import { SongLiked } from "../types/song";
import { SongLike } from "./SongLike";

type Props = {
  likedSong: SongLiked;
  index: number;
};

export const LikedSongItem = ({ likedSong, index }: Props) => {
  return (
    <tr className="index-row text-gray-300 text-sm hover:cursor-pointer hover:bg-white/10">
      <td className="px-4 py-2 whitespace-no-wrap">
        <p className="number-song text-base text-gray-50 opacity-70">
          {index + 1}
        </p>
        {/* <p
          title={`Reproducir ${likedSong.name} de ${likedSong.artist}`}
          className="play-icon text-base"
        >
          <BsPlayFill />
        </p> */}
      </td>
      <td className="px-4 py-2 whitespace-no-wrap">
        <div className="flex flex-row gap-2">
          <img
            src={likedSong.album.image}
            width={50}
            height={50}
            alt={likedSong.album.name}
          />
          <div className="flex-col">
            <strong className="text-white">{likedSong.name}</strong>
            <p className="text-gray-400">{likedSong.artist}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-2 whitespace-no-wrap text-gray-50 opacity-70">
        {likedSong.album.name}
      </td>
      <td>
        <p
          title="Eliminar de Tu biblioteca"
          className="text-green-500 text-base hover:cursor-pointer"
        >
          <SongLike liked={true} songId={likedSong.id} />
        </p>
      </td>
      <td className="px-4 py-2">{likedSong.duration}</td>
    </tr>
  );
};
