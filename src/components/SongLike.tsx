import { useState } from "react";
import { dislikeSong, likeSong } from "../services/user_actions";
import { Like } from "./Like";

type Props = {
  songId: number;
  liked: boolean;
};

export const SongLike = ({ liked, songId }: Props) => {
  const [isLiked, setIsLiked] = useState(liked);
  const handleLike = async () => {
    if (liked === false) {
      try {
        await likeSong(songId);
        setIsLiked(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await dislikeSong(songId);
        setIsLiked(false);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return <Like fn={handleLike} liked={isLiked} />;
};