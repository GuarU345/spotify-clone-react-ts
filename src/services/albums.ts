import axios from "axios";
import { API_URL, token, userId } from "../utils/helpers";

const getLikedAlbums = async () => {
  const { data } = await axios.get(`${API_URL}/users/${userId}/albums`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const getAlbums = async () => {
  const { data } = await axios.get(`${API_URL}/albums`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const getAlbumDataById = async (albumId: string) => {
  const { data } = await axios.get(`${API_URL}/albums/${albumId}/songs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    ...data,
    type: "Álbum",
  };
};

export const AlbumsService = {
  getLikedAlbums,
  getAlbums,
  getAlbumDataById,
};