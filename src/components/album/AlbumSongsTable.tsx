import { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { SongService } from "../../services/songs";
import { LikedSongs, Song } from "../../types/song";
import { SongLike } from "../song/SongLike";
import { useAuthStore } from "../../store/useAuthStore";

type Props = {
  songs: Song[];
  artist: string;
};

export const AlbumSongsTable = ({ songs, artist }: Props) => {
  const [newSongs, setNewSongs] = useState<LikedSongs[]>([]);
  const { token } = useAuthStore();

  const getUserLikedSongs = async () => {
    const likeds = await SongService.getLikedSongsByUserId(token, songs);
    const likedSongs = songs.map((song) => {
      const isLiked = likeds.includes(song.id);
      return {
        ...song,
        liked: isLiked,
      };
    });
    setNewSongs(likedSongs);
  };

  useEffect(() => {
    getUserLikedSongs();
  }, [songs]);
  return (
    <table className="table-auto min-w-full text-left divide-y divide-gray-100/50">
      <thead>
        <tr className="text-gray-300 text-sm">
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Titulo</th>
          <th className="px-4 py-2">
            <span className="text-xl">
              <IoTimeOutline />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {newSongs.map((song, index) => (
          <tr
            key={song.id}
            className="text-gray-300 text-sm hover:cursor-pointer hover:bg-white/10"
          >
            <td className="px-4 py-2">{index + 1}</td>
            <td className="px-4 py-2 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-bold">{song.name}</span>
                <p className="text-gray-400">{artist}</p>
              </div>
              <SongLike liked={song.liked} songId={song.id} />
            </td>
            <td className="px-4 py-2">{song.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
