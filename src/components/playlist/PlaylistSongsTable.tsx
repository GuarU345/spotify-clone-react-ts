import { BsPlayFill } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { LikedSongItem } from "../song/LikedSongItem";
import { useEffect, useState } from "react";
import { SongLiked } from "../../types/song";
import { SongService } from "../../services/songs";
import { useAuthStore } from "../../store/useAuthStore";

export const PlaylistSongsTable = ({ songs }) => {
  const [newSongs, setNewSongs] = useState<SongLiked[]>([]);
  const { token } = useAuthStore();

  const getUserLikedSongs = async () => {
    const songsData = songs.map((song) => song.song);
    const likeds = await SongService.getLikedSongsByUserId(token, songsData);
    const likedSongs = songs.map((song) => {
      const isLiked = likeds.includes(song.song.id);
      return {
        ...song,
        liked: isLiked,
      };
    });
    setNewSongs(likedSongs);
  };

  useEffect(() => {
    if (songs) {
      getUserLikedSongs();
    }
  }, [songs]);

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-full w-[50px] h-[50px] bg-green-500 grid place-content-center hover:scale-105">
        <p className="text-black text-2xl">
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
          {newSongs?.map((likedSong, index: number) => (
            <LikedSongItem
              key={likedSong.song.id}
              likedSong={likedSong}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
