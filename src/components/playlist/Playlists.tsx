import { useFetchUserPlaylists, useFetchUserPlaylistsCount } from '../../hooks/useFetchPlaylists';
import { useAuthStore } from '../../store/useAuthStore';
import { PlaylistCard } from './PlaylistCard';

export const Playlists = () => {
    const { userData } = useAuthStore();
    const { data: playlists, isLoading } =
        useFetchUserPlaylists(userData.token!, userData.user_id!);
    const { data: playlistsCount } = useFetchUserPlaylistsCount(userData.token!, userData.user_id!)
    const playlistArray = Array.from({ length: playlistsCount }, () => '')

    return (
        <div className="grid grid-cols-3 gap-2">
            {isLoading && playlistArray.map((_, index) => (
                <PlaylistCard key={index} haveSongs={true} />
            ))}
            {playlists?.map((playlist) => (
                <PlaylistCard key={playlist.id} playlist={playlist} haveSongs={playlist.haveSongs} />
            ))}
        </div>
    )
}
