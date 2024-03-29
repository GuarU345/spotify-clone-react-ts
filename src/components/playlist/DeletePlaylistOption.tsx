import { DropdownMenuItem } from '../../../@/components/ui/dropdown-menu'
import { FiMinusCircle } from 'react-icons/fi'
import { PlaylistService } from '../../services/playlists'
import { useAuthStore } from '../../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useInvalidateQuery } from '../../hooks/useInvalidateQuery'

export const DeletePlaylistOption = ({ playlistId }: { playlistId: string }) => {
    const { userData } = useAuthStore()
    const navigate = useNavigate()
    const { invalidate } = useInvalidateQuery()

    const handleRemovePlaylist = async () => {
        try {
            toast.dismiss()
            await PlaylistService.deletePlaylist(userData.token!, playlistId)
            await invalidate("likedData")
            toast('Eliminada de tu biblioteca')
            navigate('/')
        } catch (error) {
            toast('Error al tratar de eliminar la playlist')
        }
    }

    return (
        <DropdownMenuItem onClick={handleRemovePlaylist} className="hover:bg-white/20 p-2 cursor-default flex gap-2">
            <FiMinusCircle /> <p>Eliminar</p>
        </DropdownMenuItem>
    )
}
