import { API_URL, token, userId } from "../utils/helpers";

const getLikedSongsPlaylist = async () => {
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
