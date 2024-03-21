import axios from "axios";
import { API_URL } from "../utils/constants";
import { orderedPlaylists } from "../utils/functions";

const getUserPlaylists = async (token: string, userId: string) => {
  const { data } = await axios.get(`${API_URL}/users/${userId}/playlists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  data.sort(orderedPlaylists)
  return data
};

const getUserPlaylistsCount = async (token: string, userId: string) => {
  const { data } = await axios.get(`${API_URL}/users/${userId}/playlists/count`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data
}

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

const getPlaylistById = async (token: string, playlistId: string) => {
  const { data } = await axios.get(`${API_URL}/playlists/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  return data
}

const getPlaylistDataById = async (
  token: string,
  playlistId: string,
  userId: string
) => {
  const { data } = await axios.get(
    `${API_URL}/playlists/${playlistId}/songs?userId=${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return {
    ...data,
    type: "Playlist",
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

const removeSongOnPlaylist = async (token: string, playlistId: string, songId: string) => {
  const { data } = await axios.delete(
    `${API_URL}/playlists/${playlistId}/songs/${songId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}

const editPlaylist = async (token: string, playlistId: string, body: any) => {
  const { data } = await axios.patch(
    `${API_URL}/playlists/${playlistId}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

const deletePlaylist = async (token: string, playlistId) => {
  const { data } = await axios.delete(`${API_URL}/playlists/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}

export const PlaylistService = {
  getPlaylistDataById,
  getUserPlaylists,
  getUserPlaylistsCount,
  getPlaylistById,
  addPlaylist,
  addSongToPlaylist,
  removeSongOnPlaylist,
  editPlaylist,
  deletePlaylist
};
