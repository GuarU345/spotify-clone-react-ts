import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
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

    try {
      if (!isLiked) {
        await likeAlbum(userData.token!, userData.user_id!, albumId);
        setIsLiked(true);
        await invalidate("likedData");
        toast("Añadido a tu biblioteca");
        return;
      }

      await dislikeAlbum(userData.token!, userData.user_id!, albumId);
      setIsLiked(false);
      await invalidate("likedData");
      toast("Se ha quitado de tu biblioteca");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLikedAlbum();
  }, [albumId]);

  return { error, handleLikeAlbum, isLiked };
};
