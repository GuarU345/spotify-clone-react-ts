import { useModal } from "../store/useModal";

export const AlbumImageModal = ({ image }) => {
  const { hideModal } = useModal()

  return (
    <>
      <picture>
        <img
          className="object-contain w-[200px] h-[200px] rounded-lg lg:w-[400px] lg:h-[400px] xl:w-[425px] xl:h-[425px] 2xl:h-[600px] 2xl:w-[600px] animate-fade-up animate-ease-in-out"
          src={image}
          alt="zoom of image"
        />
      </picture>
      <button
        className="font-bold hover:scale-110 text-white"
        onClick={hideModal}
      >
        Cerrar
      </button>
    </>
  );
};
