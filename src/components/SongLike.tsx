import { useState } from "react";
import { dislikeSong, likeSong } from "../services/user_actions";
import { Like } from "./Like";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "sonner";
import { useQueryClient } from "react-query";

type Props = {
  songId: number;
  liked: boolean;
};

export const SongLike = ({ liked, songId }: Props) => {
  const [isLiked, setIsLiked] = useState(liked);
  const { token } = useAuthStore();
  const queryClient = useQueryClient();
  const handleLike = async () => {
    if (liked === false) {
      try {
        toast.dismiss();
        await likeSong(token, songId);
        setIsLiked(true);
        await queryClient.invalidateQueries({ queryKey: "likedSongs" });
        toast("Añadida a canciones que te gustan");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        toast.dismiss();
        await dislikeSong(token, songId);
        setIsLiked(false);
        await queryClient.invalidateQueries({ queryKey: "likedSongs" });
        toast("Quitada de las canciones que te gustan");
      } catch (error) {
        console.error(error);
      }
    }
  };
  return <Like fn={handleLike} liked={isLiked} />;
};
