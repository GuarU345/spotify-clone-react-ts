import { BsHeart, BsHeartFill } from "react-icons/bs";

type Props = {
  fn: () => void;
  liked: boolean;
};

export const Like = ({ fn, liked }: Props) => {
  return (
    <button
      onClick={fn}
      className={`${liked ? "text-green-500" : "d-none"} text-xl`}
    >
      {liked ? <BsHeartFill /> : <BsHeart />}
    </button>
  );
};
