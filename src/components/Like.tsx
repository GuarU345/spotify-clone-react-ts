import { BsHeart, BsHeartFill } from "react-icons/bs";

type Props = {
  fn: () => void;
  liked: boolean;
  size: number;
};

export const Like = ({ fn, liked, size }: Props) => {
  return (
    <button
      onClick={fn}
      className={`${liked ? "text-green-500" : "text-white"}`}
    >
      {liked ? <BsHeartFill size={size} /> : <BsHeart size={size} />}
    </button>
  );
};
