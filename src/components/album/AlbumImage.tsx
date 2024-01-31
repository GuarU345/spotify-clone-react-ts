import { ALBUMIMAGEMODALID } from "../../utils/modal-ids"
import { useModal } from "../../store/useModal";

interface Props {
  name: string;
  image: string;
}

export const AlbumImage = ({ image, name }: Props) => {
  const { showModal } = useModal();

  return (
    <>
      <picture>
        <img
          onClick={() => showModal(ALBUMIMAGEMODALID, { image: image })}
          className="xl:w-48 xl:h-48 2xl:w-52 2xl:h-52 hover:scale-105 hover:cursor-pointer transition-scale"
          src={image}
          alt={name}
        />
      </picture>
    </>
  );
};
