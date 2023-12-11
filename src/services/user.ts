import { AlbumsService } from "./albums";
import { PlaylistService } from "./playlists";

const getLikedData = async (token: string, userId: string) => {
  const albums = await AlbumsService.getLikedAlbums(token, userId);
  const playlists = await PlaylistService.getUserPlaylists(token, userId);

  const likedData = [...playlists, ...albums];
  return likedData;
};

export const userLikedDataService = {
  getLikedData,
};
