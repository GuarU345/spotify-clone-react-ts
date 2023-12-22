import { useQuery } from "react-query";
import { userLikedDataService } from "../services/user";

export const useFetchLikedData = (token: string, userId: string) => {
  return useQuery("likedData", () => {
    return userLikedDataService.getLikedData(token, userId);
  });
};
