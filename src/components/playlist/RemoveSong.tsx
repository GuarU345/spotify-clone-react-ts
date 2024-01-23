import { useParams } from 'react-router-dom'
import { DropdownMenuItem } from '../../../@/components/ui/dropdown-menu'
import { SlTrash } from 'react-icons/sl'
import { useRemoveSongFromPlaylist } from '../../hooks/useRemoveSongFromPlaylist'

export const RemoveSong = ({ songId }: { songId: string }) => {
    const { playlistId } = useParams()
    const { removeSongFromPlaylist } = useRemoveSongFromPlaylist()

    return (
        <DropdownMenuItem onClick={() => removeSongFromPlaylist({ playlistId, songId })} className="flex gap-2 hover:bg-white/20 p-2 cursor-default">
            <SlTrash className="text-gray-400" size={18} />
            <p>Quitar de esta lista</p>
        </DropdownMenuItem>
    )
}
