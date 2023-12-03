import axios from "axios";
import { API_URL, token, userId } from "../utils/helpers";

export const likeSong = async (songId: number) => {
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

export const dislikeSong = async (songId: number) => {
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

export const likeAlbum = async (albumId: number) => {
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

export const dislikeAlbum = async (albumId: number) => {
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
