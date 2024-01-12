import { Like } from "../Like";
import { useLikeSong } from "../../hooks/useLikeSong";

type Props = {
  songId: string;
  liked: boolean;
};

export const SongLike = ({ liked, songId }: Props) => {
  const { handleLike, isLiked } = useLikeSong(songId, liked);
  return <Like fn={handleLike} liked={isLiked} size={18} />;
};
