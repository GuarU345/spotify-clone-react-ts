import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { AlbumsService } from "../services/albums";
import { toast } from "sonner";
import { dislikeAlbum, likeAlbum } from "../services/user_actions";
import { useInvalidateQuery } from "./useInvalidateQuery";

export const useLikeAlbum = (albumId: string) => {
  const [isLiked, setIsLiked] = useState<boolean>();
  const { userData } = useAuthStore();
  const { invalidate } = useInvalidateQuery();

  const [error, setError] = useState<any>();

  const isLikedAlbum = async () => {
    try {
      const { liked } = await AlbumsService.checkUserLikesAlbum(
        userData.token!,
        userData.user_id!,
        albumId
      );

      setIsLiked(liked);
    } catch (error) {
      setError(error);
    }
  };

  const handleLikeAlbum = async () => {
    toast.dismiss();
    let message = ""

    try {
      if (!isLiked) {
        await likeAlbum(userData.token!, userData.user_id!, albumId);
        message = "añadido a tu biblioteca"
      } else {
        await dislikeAlbum(userData.token!, userData.user_id!, albumId);
        message = "Se ha quitado de tu biblioteca"
      }

      setIsLiked((prev) => !prev)
      await invalidate("likedData");
      toast(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLikedAlbum();
  }, [albumId]);

  return { error, handleLikeAlbum, isLiked };
};
