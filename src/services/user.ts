import { AlbumsService } from "./albums";
import { PlaylistService } from "./playlists";

const getLikedData = async (token) => {
  const albums = await AlbumsService.getLikedAlbums(token);
  const playlists = await PlaylistService.getUserPlaylists(token);

  const likedData = [...playlists, ...albums];
  return likedData;
};

export const userLikedDataService = {
  getLikedData,
};
