import { useQuery } from "react-query";
import { SongService } from "../services/songs";

export const useFetchLikedSongs = (token) => {
  return useQuery("likedSongs", () => {
    return SongService.getLikedSongs(token);
  });
};
