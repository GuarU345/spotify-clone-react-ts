import axios from "axios";
import { API_URL } from "../utils/helpers";

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

export const getLikedSongsByUserId = async (
  token: string | null,
  userId: string,
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

export const SongService = {
  getSongsByAlbumId,
  getLikedSongsByUserId,
  search,
};
