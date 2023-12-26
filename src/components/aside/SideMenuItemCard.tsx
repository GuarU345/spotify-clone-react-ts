import { useFetchLikedData } from "../../hooks/useFetchUserLikedData";
import { useAuthStore } from "../../store/useAuthStore";
import { Link } from "react-router-dom";
import { usePlayerStore } from "../../store/usePlayerStore";
import { HiSpeakerWave } from "react-icons/hi2";

export const SideMenuItemCard = () => {
  const { userData } = useAuthStore();
  const { currentMusic, isPlaying } = usePlayerStore();
  const { data, isLoading } = useFetchLikedData(
    userData.token!,
    userData.user_id!
  );

  return (
    <>
      {isLoading && (
        <>
          <p>loading...</p>
        </>
      )}
      <ul className="flex flex-col gap-2">
        {data?.map((likedData) => (
          <Link
            key={likedData.name}
            to={
              likedData.type === "album"
                ? `/album/${likedData.id}`
                : `/playlist/${likedData.id}`
            }
          >
            <li className="flex items-center  p-2 gap-2 hover:cursor-pointer hover:bg-white/5">
              <picture>
                <img
                  className="w-14 h-14 rounded-md"
                  src={likedData.image}
                  alt={likedData.name}
                />
              </picture>
              <div className="flex flex-col text-white">
                <p
                  className={`text-sm font-semibold ${
                    currentMusic.id === likedData.id ? "text-green-500" : ""
                  }`}
                >
                  {likedData.name}
                </p>
                <p className="text-xs text-gray-300">{likedData.author}</p>
              </div>
              {currentMusic.id === likedData.id && isPlaying ? (
                <div className="flex ml-auto">
                  <HiSpeakerWave className="text-green-500" size={20} />
                </div>
              ) : null}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
