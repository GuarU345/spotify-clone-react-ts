import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../../@/components/ui/dropdown-menu'
import { SuspensivePoints } from '../icons/Icons'
import { DeletePlaylistOption } from "./playlist/DeletePlaylistOption";
import { EditPlaylistOption } from './playlist/EditPlaylistOption';

export const DropdownPlaylistMenu = ({ playlistId }: { playlistId: string }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-400 hover:text-white text-2xl">
                <SuspensivePoints className="w-8 h-8" />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="flex flex-col gap-3 py-1 w-56 bg-zinc-800 z-20">
                <EditPlaylistOption />
                <DeletePlaylistOption playlistId={playlistId!} />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
