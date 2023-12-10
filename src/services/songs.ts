import axios from "axios";
import { API_URL, userId } from "../utils/helpers";

const search = async (token: string, name: string) => {
  const { data } = await axios.get(`${API_URL}/search?name=${name}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const getSongsByAlbumId = async (token: string | null, albumId: number) => {
  const { data } = await axios.get(`${API_URL}/albums/${albumId}/songs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getUserLikedSongsByAlbum = async (
  token: string | null,
  songIds: unknown
) => {
  const body = {
    songs: songIds,
  };
  const { data } = await axios.post(`${API_URL}/users/${userId}/songs/`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const getLikedSongs = async (token: string | null) => {
  const resp = await fetch(`http://localhost:3000/api/users/${userId}/songs`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const likedSongs = await resp.json();
  return likedSongs;
};

export const SongService = {
  getSongsByAlbumId,
  getUserLikedSongsByAlbum,
  getLikedSongs,
  search,
};
