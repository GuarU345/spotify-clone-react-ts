export const API_URL = "http://localhost:3000/api";

export const MUSIC_TYPES = {
  ALBUM: "album",
  PLAYLIST: "playlist",
  SONG: "song",
};

export const isUndefined = (obj: any): obj is undefined =>
  typeof obj === "undefined";
