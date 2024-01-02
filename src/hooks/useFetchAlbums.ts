import { useQuery } from "react-query";
import { AlbumsService } from "../services/albums";

export const useFetchAlbumData = (
  token: string,
  id: string,
  userId: string
) => {
  return useQuery("albumData", () => {
    return AlbumsService.getAlbumDataById(token, id, userId);
  });
};
