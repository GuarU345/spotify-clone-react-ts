import { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { LikedSongItem } from "../LikedSongItem";
import { SongService } from "../../services/songs";
import { SongLiked } from "../../types/song";

export const PlaylistSongsTable = () => {
  const [likedSongs, setLikedSongs] = useState<SongLiked[]>([]);

  const getLikedSongs = async () => {
    const data = await SongService.getLikedSongs();
    setLikedSongs(data);
  };

  useEffect(() => {
    getLikedSongs();
  });
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-full w-[50px] h-[50px] bg-green-500 grid place-content-center hover:scale-105">
        <p className="text-black">
          <BsPlayFill />
        </p>
      </div>
      <table className="min-w-full table-auto text-left divide-y divide-gray-100/50">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Titulo</th>
            <th className="px-4 py-2">Álbum</th>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2">
              <IoTimeOutline />
            </th>
          </tr>
        </thead>
        <tbody>
          {likedSongs.length > 0
            ? likedSongs.map((likedSong, index) => (
                <LikedSongItem
                  key={likedSong.id}
                  likedSong={likedSong}
                  index={index}
                />
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};
