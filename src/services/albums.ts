import axios from "axios";
import { API_URL, token, userId } from "../utils/helpers";

const getLikedAlbums = async () => {
  const { data } = await axios.get(`${API_URL}/users/${userId}/albums`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const AlbumsService = {
  getLikedAlbums,
};
