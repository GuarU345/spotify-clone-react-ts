import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PlaylistService } from "../services/playlists";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "sonner";
import { useInvalidateQuery } from "../hooks/useInvalidateQuery";
import { Modal } from "../components/Modal";
import { useModal } from "../store/useModal";
import { RxCross1 } from "react-icons/rx";


export const EditPlaylistInfoModal = ({ playlistId }: { playlistId: string }) => {
  const [image, setImage] = useState("")
  const { register, setValue, handleSubmit } = useForm();
  const { userData } = useAuthStore();
  const { invalidate } = useInvalidateQuery()
  const { hideModal } = useModal()

  const getPlaylistById = async () => {
    const resp = await PlaylistService.getPlaylistById(userData.token!, playlistId)
    setValue("name", resp.name);
    setValue("description", resp.description);
    setImage(resp.image)
  }

  const handleEditPlaylist = handleSubmit(async (formData) => {
    const body = {
      name: formData.name,
      description: formData.description,
    };
    try {
      await PlaylistService.editPlaylist(userData.token!, playlistId!, body);
      toast("Playlist editada");
      await invalidate('playlistData');
      await invalidate('likedData')
      hideModal();
    } catch (error) {
      toast("No se pudo editar su playlist");
      hideModal();
    }
  });

  useEffect(() => {
    getPlaylistById()
  }, [playlistId]);
  return (
    <Modal>
      <main className="bg-zinc-800 p-4 rounded-md">
        <header className="text-gray-400 mb-4 flex justify-between">
          <h1 className="font-bold text-white">Editar informacíon</h1>
          <RxCross1 className="hover:cursor-pointer" onClick={hideModal}>X</RxCross1>
        </header >
        <div className="bg-zinc-800">
          <section className="flex justify-center items-stretch gap-5">
            <img src={image} className="w-36 h-36 rounded-md" />
            <form onSubmit={handleEditPlaylist} className="flex flex-col gap-2">
              <label htmlFor="">
                <input
                  className="w-full text-white outline-none bg-zinc-600 p-2 focus:bg-zinc-700 rounded-sm"
                  type="text"
                  {...register("name")}
                />
              </label>
              <label htmlFor="">
                <textarea
                  className="w-full text-white outline-none bg-zinc-600 px-2 focus:bg-zinc-700 rounded-sm"
                  id=""
                  cols={20}
                  rows={4}
                  {...register("description")}
                ></textarea>
                <div className="flex justify-end">
                  <button className="rounded-3xl font-bold bg-white mt-2 p-3 w-28 text-black hover:scale-105">
                    Guardar
                  </button>
                </div>
              </label>
            </form>
          </section>
        </div>
      </main>
    </Modal>
  );
};
