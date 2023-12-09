import axios from "axios";
import { API_URL, userId } from "../utils/helpers";

const getLikedSongsPlaylist = async (token) => {
  const res = await fetch(`${API_URL}/users/${userId}/playlists/love`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const likedPlaylist = await res.json();
  return {
    ...likedPlaylist,
    type: "Lista",
  };
};

const getPlaylistDataById = async (token: string, playlistId: string) => {
  const { data } = await axios.get(`${API_URL}/playlists/${playlistId}/songs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    ...data,
    type: "Lista",
  };
};

export const PlaylistService = {
  getLikedSongsPlaylist,
  getPlaylistDataById,
};
