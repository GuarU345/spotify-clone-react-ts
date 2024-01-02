import { useState } from "react";
import { AlbumImageModal } from "../../modals/AlbumImageModal";
import ReactDOM from "react-dom";

interface Props {
  name: string;
  image: string;
}

export const AlbumImage = ({ image, name }: Props) => {
  const [open, setOpen] = useState(false);
  const handleZoomImage = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <picture>
        <img
          onClick={handleZoomImage}
          className="xl:w-48 xl:h-48 2xl:w-52 2xl:h-52 hover:scale-105 hover:cursor-pointer transition-scale"
          src={image}
          alt={name}
        />
      </picture>
      {open &&
        ReactDOM.createPortal(
          <AlbumImageModal image={image} handleClose={handleClose} />,
          document.body
        )}
    </>
  );
};
