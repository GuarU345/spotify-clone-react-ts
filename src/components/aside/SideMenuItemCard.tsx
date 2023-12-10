import { useAuthStore } from "../../store/useAuthStore";
import { useFetchLikedAlbums } from "../../hooks/useFetchAlbums";
import { Link } from "react-router-dom";

export const SideMenuItemCard = () => {
  const { token } = useAuthStore();
  const { data, error, isLoading } = useFetchLikedAlbums(token);

  return (
    <>
      {isLoading && (
        <>
          <p>loading...</p>
        </>
      )}
      <ul className="flex flex-col gap-2">
        {data?.map((album) => (
          <Link key={album.id} to={`/album/${album.id}`}>
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
                <span className="text-xs text-gray-300">{album.artist}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
