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
          className="w-52 h-52 hover:scale-105 hover:cursor-pointer transition-all"
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
