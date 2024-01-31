import { RxPencil1 } from "react-icons/rx";
import { useModal } from "../../store/useModal";
import { EDITPLAYLISTMODALID } from "../../utils/modal-ids";
import { useParams } from "react-router-dom";

interface PlaylistImageProps {
  name: string;
  image: string;
  description: string;
}

export const PlaylistImage = ({
  name,
  image,
}: PlaylistImageProps) => {
  const { showModal } = useModal();
  const { playlistId } = useParams()
  return (
    <>
      <div className="relative group">
        <picture>
          <img
            className="xl:w-48 xl:h-48 2xl:w-52 2xl:h-52"
            src={image}
            alt={name}
          />
        </picture>
        <div
          onClick={() => showModal(EDITPLAYLISTMODALID, { playlistId })}
          className={
            name !== "Canciones que te gustan"
              ? "hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex flex-col items-center justify-center"
              : "hidden"
          }
        >
          <RxPencil1 size={58} />
          <p>Elegir foto</p>
        </div>
      </div>
    </>
  );
};
