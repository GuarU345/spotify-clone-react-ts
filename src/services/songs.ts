import axios from "axios";
import { API_URL, token, userId } from "../utils/helpers";

const getSongsByAlbumId = async (albumId: number) => {
  const { data } = await axios.get(`${API_URL}/albums/${albumId}/songs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getUserLikedSongsByAlbum = async (songIds: unknown) => {
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

const getLikedSongs = async () => {
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
};
