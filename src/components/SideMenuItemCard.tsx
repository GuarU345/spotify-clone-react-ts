import { useEffect, useState } from "react";
import { AlbumsService } from "../services/albums";
import { LikedAlbums } from "../types/album";

export const SideMenuItemCard = () => {
  const [likedAlbums, setLikedAlbums] = useState<LikedAlbums[]>([]);

  const getLikedAlbums = async () => {
    const data = await AlbumsService.getLikedAlbums();
    setLikedAlbums(data);
  };

  useEffect(() => {
    getLikedAlbums();
  }, []);
  return (
    <ul className="flex flex-col gap-2">
      {likedAlbums.length > 0
        ? likedAlbums.map((album) => (
            <a key={album.id}>
              <li className="flex items-center  p-2 gap-2 hover:cursor-pointer hover:bg-white/5">
                <picture>
                  <img
                    className="w-16 h-16 rounded-md"
                    src={album.albumImage}
                    alt={album.album}
                  />
                </picture>
                <div className="flex flex-col text-white">
                  <p className="text-sm font-semibold">{album.album}</p>
                  <span className="text-xs text-gray-300">{album.artist}</span>
                </div>
              </li>
            </a>
          ))
        : null}
    </ul>
  );
};
