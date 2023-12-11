import axios from "axios";
import { API_URL } from "../utils/helpers";

const getLikedAlbums = async (token: string | null, userId: string) => {
  const { data } = await axios.get(`${API_URL}/users/${userId}/albums`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const getAlbums = async (token: string | null) => {
  const { data } = await axios.get(`${API_URL}/albums`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const getAlbumDataById = async (token: string | null, albumId: string) => {
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

const checkUserLikesAlbum = async (
  token: string | null,
  userId: string,
  albumId: number
) => {
  const { data } = await axios.get(
    `${API_URL}/users/${userId}/albums/${albumId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const AlbumsService = {
  getLikedAlbums,
  getAlbums,
  getAlbumDataById,
  checkUserLikesAlbum,
};
