import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useQueryClient } from "react-query";
import { toast } from "sonner";
import { dislikeSong, likeSong } from "../services/user_actions";

export const useLikeSong = (songId: string, liked: boolean) => {
  const [isLiked, setIsLiked] = useState<boolean>(liked);
  const { userData } = useAuthStore();
  const queryClient = useQueryClient();

  const handleLike = async () => {
    if (liked === false) {
      try {
        toast.dismiss();
        await likeSong(userData.token!, userData.user_id!, songId);
        setIsLiked(true);
        await queryClient.invalidateQueries({ queryKey: "playlistData" });
        await queryClient.invalidateQueries({ queryKey: "albumData" });
        toast("Añadida a canciones que te gustan");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        toast.dismiss();
        await dislikeSong(userData.token!, userData.user_id!, songId);
        setIsLiked(false);
        await queryClient.invalidateQueries({ queryKey: "playlistData" });
        await queryClient.invalidateQueries({ queryKey: "albumData" });
        toast("Quitada de las canciones que te gustan");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return { handleLike, isLiked };
};
