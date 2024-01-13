import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "sonner";
import { dislikeSong, likeSong } from "../services/user_actions";
import { useInvalidateQuery } from "./useInvalidateQuery";

export const useLikeSong = (songId: string, liked: boolean) => {
  const [isLiked, setIsLiked] = useState<boolean>(liked);
  const { userData } = useAuthStore();
  const { invalidate } = useInvalidateQuery();

  const handleLike = async () => {
    if (liked === false) {
      try {
        toast.dismiss();
        await likeSong(userData.token!, userData.user_id!, songId);
        setIsLiked(true);
        await invalidate("playlistData");
        await invalidate("albumData");
        toast("Añadida a canciones que te gustan");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        toast.dismiss();
        await dislikeSong(userData.token!, userData.user_id!, songId);
        setIsLiked(false);
        await invalidate("playlistData");
        await invalidate("albumData");
        toast("Quitada de las canciones que te gustan");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return { handleLike, isLiked };
};
