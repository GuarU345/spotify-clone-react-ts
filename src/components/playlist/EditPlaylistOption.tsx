import { RxPencil1 } from 'react-icons/rx'
import { DropdownMenuItem } from '../../../@/components/ui/dropdown-menu'
import { useModal } from '../../store/useModal'
import { EDITPLAYLISTMODALID } from '../../utils/modal-ids'
import { useParams } from 'react-router-dom'

export const EditPlaylistOption = () => {
    const { playlistId } = useParams()
    const { showModal } = useModal()
    return (
        <DropdownMenuItem onClick={() => showModal(EDITPLAYLISTMODALID, { playlistId })} className="hover:bg-white/20 p-2 cursor-default flex gap-2">
            <RxPencil1 /> <p>Editar detalles</p>
        </DropdownMenuItem>
    )
}
