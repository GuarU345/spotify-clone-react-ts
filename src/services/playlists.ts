import { API_URL, userId } from "../utils/helpers";

const getLikedSongsPlaylist = async (token) => {
  const res = await fetch(`${API_URL}/users/${userId}/playlists/love`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const likedPlaylist = await res.json();
  return {
    ...likedPlaylist,
    type: "Lista",
  };
};

export const PlaylistService = {
  getLikedSongsPlaylist,
};
