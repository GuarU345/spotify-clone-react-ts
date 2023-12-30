import { RxPencil1 } from "react-icons/rx";
import { EditPlaylistInfoModal } from "../../modals/EditPlaylistInfoModal";
import { useModal } from "../../hooks/useModal";
import ReactDOM from "react-dom";

interface PlaylistImageProps {
  name: string;
  image: string;
  description: string;
}

export const PlaylistImage = ({
  name,
  image,
  description,
}: PlaylistImageProps) => {
  const { handleOpen, handleClose, open } = useModal();
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
          onClick={handleOpen}
          className={
            name !== "Canciones que te gustan"
              ? "hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:flex flex-col items-center justify-center"
              : "hidden"
          }
        >
          <RxPencil1 size={58} />
          <p>Elegir foto</p>
        </div>
        {open &&
          ReactDOM.createPortal(
            <EditPlaylistInfoModal
              open={open}
              handleClose={handleClose}
              name={name}
              image={image}
              description={description}
            />,
            document.body
          )}
      </div>
    </>
  );
};
