import { useState } from "react";
import { dislikeSong, likeSong } from "../../services/user_actions";
import { Like } from "../Like";
import { useAuthStore } from "../../store/useAuthStore";
import { toast } from "sonner";
import { useQueryClient } from "react-query";

type Props = {
  songId: string;
  liked: boolean;
};

export const SongLike = ({ liked, songId }: Props) => {
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
  return <Like fn={handleLike} liked={isLiked} size={18} />;
};
