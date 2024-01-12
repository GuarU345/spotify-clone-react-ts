import { Like } from "../Like";
import { useLikeAlbum } from "../../hooks/useLikeAlbum";

type Props = {
  albumId: string;
};

export const AlbumLike = ({ albumId }: Props) => {
  const { handleLikeAlbum, isLiked } = useLikeAlbum(albumId);

  return <Like fn={handleLikeAlbum} liked={isLiked!} size={25} />;
};
