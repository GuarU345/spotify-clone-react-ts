import { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { SongService } from "../../services/songs";
import { LikedSongs, Song } from "../../types/song";
import { SongLike } from "../song/SongLike";
import { useAuthStore } from "../../store/useAuthStore";
import { DropdownMenu } from "../DropdownMenu";
import { useParams } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import { usePlaySong } from "../../hooks/usePlaySong";
import { MUSIC_TYPES } from "../../utils/helpers";

type Props = {
  songs: Song[];
  artist: string;
};

export const AlbumSongsTable = ({ songs, artist }: Props) => {
  const [newSongs, setNewSongs] = useState<LikedSongs[]>([]);
  const { userData } = useAuthStore();
  const { albumId } = useParams();
  const { playUniqueSong } = usePlaySong();

  const getUserLikedSongs = async () => {
    const likeds = await SongService.getLikedSongsByUserId(
      userData.token!,
      userData.user_id!,
      songs
    );
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
    if (songs) {
      getUserLikedSongs();
    }
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        {newSongs.map((song, index) => (
          <tr
            key={song.id}
            className="index-row text-gray-300 text-sm hover:cursor-pointer hover:bg-white/10"
          >
            <td className="px-4 py-2 whitespace-no-wrap">
              <p className="number-song text-base text-gray-50 opacity-70">
                {index + 1}
              </p>
              <p
                onClick={() =>
                  playUniqueSong(albumId!, song.id, MUSIC_TYPES.ALBUM)
                }
                title={`Reproducir ${song.name} de ${song.name}`}
                className="play-icon text-base"
              >
                <BsPlayFill />
              </p>
            </td>
            <td className="px-4 py-2 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-bold">{song.name}</span>
                <p className="text-gray-400">{artist}</p>
              </div>
              <SongLike liked={song.liked} songId={song.id} />
            </td>
            <td className="px-4 py-2">{song.duration}</td>
            <td>
              <DropdownMenu songId={song.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
