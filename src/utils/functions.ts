import { INITIAL_PLAYLIST_NAME } from "./constants";

export const isUndefined = (obj: any): obj is undefined =>
    typeof obj === "undefined";

export const orderedPlaylists = (a, b) => {
    if (a.name === INITIAL_PLAYLIST_NAME) {
        return -1;
    } else if (b.name === INITIAL_PLAYLIST_NAME) {
        return 1;
    }
    return 0;
}

export const onlyCreatedPlaylistsCanBeModified = (playlistName: string) => {
    return playlistName !== INITIAL_PLAYLIST_NAME ? true : false
}