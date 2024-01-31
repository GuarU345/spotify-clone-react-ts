import axios from "axios";
import { API_URL } from "../utils/constants";

const search = async (token: string, name: string) => {
  const { data } = await axios.get(`${API_URL}/search?name=${name}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const searchSongsForYourPlaylist = async (token: string, name: string) => {
  const { data } = await axios.get(`${API_URL}/search/songs?name=${name}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const SongService = {
  search,
  searchSongsForYourPlaylist,
};
