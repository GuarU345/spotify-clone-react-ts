import { BsPlus } from "react-icons/bs";
import { useHandleAddPlaylist } from "../../hooks/useHandleAddPlaylist";

export const AddPlaylist = () => {
  const { handleAddPlaylist } = useHandleAddPlaylist();
  return (
    <button onClick={handleAddPlaylist} className="text-3xl text-gray-400">
      <BsPlus />
    </button>
  );
};
