import axios from "axios";
import { API_URL } from "../utils/helpers";

export const likeSong = async (
  token: string | null,
  userId: string,
  songId: number
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
  songId: number
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
  albumId: number
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
  albumId: number
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
