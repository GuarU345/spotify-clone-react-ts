const isProd = true

export const API_URL = isProd ? import.meta.env.VITE_API_PROD_URL : "http://localhost:3000/api";

export const INITIAL_PLAYLIST_NAME = "Canciones que te gustan";

export const MUSIC_TYPES = {
  ALBUM: "album",
  PLAYLIST: "playlist",
  SONG: "song",
};


