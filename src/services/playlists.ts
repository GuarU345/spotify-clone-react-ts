import axios from "axios";
import { API_URL } from "../utils/helpers";

const getUserPlaylists = async (token: string, userId: string) => {
  const { data } = await axios.get(`${API_URL}/users/${userId}/playlists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const addPlaylist = async (token: string, userId: string) => {
  const { data } = await axios.post(
    `${API_URL}/users/${userId}/playlists`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

const getLikedSongsPlaylist = async (token: string, userId: string) => {
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

const addSongToPlaylist = async (
  token: string,
  playlistId: string,
  songId: string
) => {
  const { data } = await axios.post(
    `${API_URL}/playlists/${playlistId}/songs/${songId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const PlaylistService = {
  getLikedSongsPlaylist,
  getPlaylistDataById,
  getUserPlaylists,
  addPlaylist,
  addSongToPlaylist,
};
