import { useEffect, useState } from "react";
import { Like } from "../Like";
import { dislikeAlbum, likeAlbum } from "../../services/user_actions";
import { AlbumsService } from "../../services/albums";
import { useAuthStore } from "../../store/useAuthStore";
import { useQueryClient } from "react-query";

type Props = {
  albumId: number;
};

export const AlbumLike = ({ albumId }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>();
  const { token } = useAuthStore();
  const queryClient = useQueryClient();

  const isLikedAlbum = async () => {
    const { liked } = await AlbumsService.checkUserLikesAlbum(token, albumId);
    setIsLiked(liked);
  };

  useEffect(() => {
    isLikedAlbum();
  }, []);
  const handleLikeAlbum = async () => {
    if (isLiked === false) {
      try {
        await likeAlbum(token, albumId);
        setIsLiked(true);
        await queryClient.invalidateQueries({ queryKey: "likedAlbums" });
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await dislikeAlbum(token, albumId);
        setIsLiked(false);
        await queryClient.invalidateQueries({ queryKey: "likedAlbums" });
      } catch (error) {
        console.error(error);
      }
    }
  };
  return <Like fn={handleLikeAlbum} liked={isLiked!} />;
};
