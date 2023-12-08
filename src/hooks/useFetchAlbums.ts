import { useQuery } from "react-query";
import { AlbumsService } from "../services/albums";

export const useFetchLikedAlbums = (token) => {
  return useQuery("likedAlbums", () => {
    return AlbumsService.getLikedAlbums(token);
  });
};
