import { IoTimeOutline } from "react-icons/io5";
import { LikedSongItem } from "../song/LikedSongItem";
import { useEffect, useState } from "react";
import { SongLiked } from "../../types/song";
import { SongService } from "../../services/songs";
import { useAuthStore } from "../../store/useAuthStore";
import { CardPlayButton } from "../player/CardPlayButton";
import { useParams } from "react-router-dom";
import { MUSIC_TYPES } from "../../utils/helpers";

export const PlaylistSongsTable = ({ songs }) => {
  const [newSongs, setNewSongs] = useState<SongLiked[]>([]);
  const { playlistId } = useParams();
  const { userData } = useAuthStore();

  const getUserLikedSongs = async () => {
    if (!songs) return;
    const songsData = songs.map((song) => song.song);
    const likeds = await SongService.getLikedSongsByUserId(
      userData.token,
      userData.user_id,
      songsData
    );
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
    getUserLikedSongs();
  }, [songs]);

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-full w-[50px] h-[50px] bg-green-500 grid place-content-center hover:scale-105">
        <CardPlayButton id={playlistId!} type={MUSIC_TYPES.PLAYLIST} />
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
