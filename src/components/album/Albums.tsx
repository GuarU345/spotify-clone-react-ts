import { useFetchAlbums } from "../../hooks/useFetchAlbums";
import { useAuthStore } from "../../store/useAuthStore";
import { AlbumCard } from "./AlbumCard";


export const Albums = () => {
    const { userData } = useAuthStore();
    const { data: albums, isLoading } = useFetchAlbums(
        userData.token!
    );

    const albumsArray = Array.from({ length: 5 }, () => '')

    return (
        <div className="flex flex-wrap mt-6 gap-4">
            {isLoading && albumsArray.map((_, index) => (
                <AlbumCard key={index} />
            ))}
            {albums?.map((album) => (
                <AlbumCard key={album.id} album={album} />
            ))}
        </div>
    )
}
