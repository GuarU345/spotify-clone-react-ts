import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "sonner";
import { dislikeSong, likeSong } from "../services/user_actions";
import { useInvalidateQuery } from "./useInvalidateQuery";

export const useLikeSong = (songId: string, liked: boolean) => {
  const [isLiked, setIsLiked] = useState<boolean>(liked);
  const { token, user_id } = useAuthStore().userData;
  const { invalidate } = useInvalidateQuery();

  const updateCache = async () => {
    await invalidate("playlistData");
    await invalidate("albumData");
  }

  const handleLike = async () => {
    toast.dismiss();
    let message = ""

    try {
      if (!isLiked) {
        await likeSong(token!, user_id!, songId);
        message = "Añadida a canciones que te gustan"
      } else {
        await dislikeSong(token!, user_id!, songId);
        message = "Quitada de las canciones que te gustan"
      }

      setIsLiked(prev => !prev)
      toast(message)
      await updateCache()
    } catch (error) {
      console.error(error);
    }
  };

  return { handleLike, isLiked };
};
