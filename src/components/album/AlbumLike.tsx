import { useEffect, useState } from "react";
import { Like } from "../Like";
import { dislikeAlbum, likeAlbum } from "../../services/user_actions";
import { AlbumsService } from "../../services/albums";

type Props = {
  albumId: number;
};

export const AlbumLike = ({ albumId }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>();

  const isLikedAlbum = async () => {
    const { liked } = await AlbumsService.checkUserLikesAlbum(albumId);
    setIsLiked(liked);
  };

  useEffect(() => {
    isLikedAlbum();
  }, []);
  const handleLikeAlbum = async () => {
    if (isLiked === false) {
      try {
        await likeAlbum(albumId);
        setIsLiked(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await dislikeAlbum(albumId);
        setIsLiked(false);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return <Like fn={handleLikeAlbum} liked={isLiked!} />;
};
