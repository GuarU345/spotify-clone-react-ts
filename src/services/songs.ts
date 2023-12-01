import axios from "axios";
import { API_URL, token } from "../utils/helpers";

export const getSongsByAlbumId = async (albumId: number) => {
  const { data } = await axios.get(`${API_URL}/albums/${albumId}/songs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
