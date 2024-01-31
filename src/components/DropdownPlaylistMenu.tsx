import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../@/components/ui/dropdown-menu'
import { SuspensivePoints } from '../icons/Icons'
import { RxPencil1 } from "react-icons/rx";
import { DeletePlaylist } from "./playlist/DeletePlaylist";

export const DropdownPlaylistMenu = ({ playlistId }: { playlistId: string }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-400 hover:text-white text-2xl">
                <SuspensivePoints className="w-8 h-8" />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="flex flex-col gap-3 py-1 w-56 bg-zinc-800 z-20">
                <DropdownMenuItem className="hover:bg-white/20 p-2 cursor-default flex gap-2">
                    <RxPencil1 /> <p>Editar detalles</p>
                </DropdownMenuItem>
                <DeletePlaylist playlistId={playlistId!} />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
