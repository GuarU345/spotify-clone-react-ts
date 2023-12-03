import { useEffect, useState } from "react";
import { PlaylistService } from "../../services/playlists";
import { LikedSongsPlaylist } from "../../types/playlist";

export const PlaylistCard = () => {
  const [playlist, setPlaylist] = useState<LikedSongsPlaylist>();

  const getLikedSongsPlaylist = async () => {
    const data = await PlaylistService.getLikedSongsPlaylist();
    setPlaylist(data);
  };

  useEffect(() => {
    getLikedSongsPlaylist();
  }, []);
  return (
    <>
      {playlist?.name ? (
        <a
          className="w-72 rounded-sm flex items-center gap-2 bg-white/5 hover:cursor-pointer hover:bg-white/10"
          href={`/playlist/${playlist.id}`}
        >
          <picture>
            <img
              src={playlist.image}
              alt={playlist.name}
              className="w-16 h-16 rounded-sm"
            />
          </picture>
          <div className="flex flex-col justify-center text-white">
            <p className="text-sm font-semibold">{playlist.name}</p>
            <span className="text-xs text-gray-300">{playlist.type}</span>
          </div>
        </a>
      ) : null}
    </>
  );
};
