import { useEffect, useState } from "react";
import { Like } from "../Like";
import { dislikeAlbum, likeAlbum } from "../../services/user_actions";
import { AlbumsService } from "../../services/albums";
import { useAuthStore } from "../../store/useAuthStore";
import { useQueryClient } from "react-query";
import { toast } from "sonner";

type Props = {
  albumId: number;
};

export const AlbumLike = ({ albumId }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>();
  const { userData } = useAuthStore();
  const queryClient = useQueryClient();

  const isLikedAlbum = async () => {
    const { liked } = await AlbumsService.checkUserLikesAlbum(
      userData.token,
      userData.user_id,
      albumId
    );
    setIsLiked(liked);
  };

  useEffect(() => {
    isLikedAlbum();
  }, [albumId]);
  const handleLikeAlbum = async () => {
    if (isLiked === false) {
      try {
        toast.dismiss();
        await likeAlbum(userData.token, userData.user_id, albumId);
        setIsLiked(true);
        await queryClient.invalidateQueries({ queryKey: "likedData" });
        toast("Añadido a tu biblioteca");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        toast.dismiss();
        await dislikeAlbum(userData.token, userData.user_id, albumId);
        setIsLiked(false);
        await queryClient.invalidateQueries({ queryKey: "likedData" });
        toast("Se ha quitado de tu biblioteca");
      } catch (error) {
        console.error(error);
      }
    }
  };
  return <Like fn={handleLikeAlbum} liked={isLiked!} />;
};
