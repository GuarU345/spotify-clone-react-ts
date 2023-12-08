import { useEffect, useState } from "react";
import { AlbumsService } from "../../services/albums";
import { LikedAlbums } from "../../types/album";
import { useAuthStore } from "../../store/useAuthStore";

export const SideMenuItemCard = () => {
  const [likedAlbums, setLikedAlbums] = useState<LikedAlbums[]>([]);
  const { token } = useAuthStore();

  const getLikedAlbums = async () => {
    const data = await AlbumsService.getLikedAlbums(token);
    setLikedAlbums(data);
  };

  useEffect(() => {
    getLikedAlbums();
  }, []);
  return (
    <>
      <ul className="flex flex-col gap-2">
        {likedAlbums.length > 0
          ? likedAlbums.map((album) => (
              <a key={album.id} href={`/album/${album.id}`}>
                <li className="flex items-center  p-2 gap-2 hover:cursor-pointer hover:bg-white/5">
                  <picture>
                    <img
                      className="w-16 h-16 rounded-md"
                      src={album.image}
                      alt={album.name}
                    />
                  </picture>
                  <div className="flex flex-col text-white">
                    <p className="text-sm font-semibold">{album.name}</p>
                    <span className="text-xs text-gray-300">
                      {album.artist}
                    </span>
                  </div>
                </li>
              </a>
            ))
          : null}
      </ul>
    </>
  );
};
