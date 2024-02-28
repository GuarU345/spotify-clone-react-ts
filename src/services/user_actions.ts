import axios from "axios";
import { API_URL } from "../utils/constants";

export const likeSong = async (
  token: string | null,
  userId: string,
  songId: string
) => {
  const { data } = await axios.post(
    `${API_URL}/users/${userId}/songs/${songId}/likes`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const dislikeSong = async (
  token: string | null,
  userId: string,
  songId: string
) => {
  const { data } = await axios.delete(
    `${API_URL}/users/${userId}/songs/${songId}/likes`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const likeAlbum = async (
  token: string | null,
  userId: string,
  albumId: string
) => {
  const { data } = await axios.post(
    `${API_URL}/users/${userId}/albums/${albumId}/likes`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const dislikeAlbum = async (
  token: string | null,
  userId: string,
  albumId: string
) => {
  const { data } = await axios.delete(
    `${API_URL}/users/${userId}/albums/${albumId}/likes`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const userReproducingSomething = async (
  token: string,
  id: string,
  type: string
) => {
  const { data } = await axios.get(`${API_URL}/data/${id}?type=${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const createSongUserState = async (token: string, body) => {
  const { data } = await axios.post(`${API_URL}/users/songs/save`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
