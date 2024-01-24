export const API_URL = "http://localhost:3000/api";

export const INITIAL_PLAYLIST_NAME = "Canciones que te gustan";

export const MUSIC_TYPES = {
  ALBUM: "album",
  PLAYLIST: "playlist",
  SONG: "song",
};

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
