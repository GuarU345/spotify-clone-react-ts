import { useQuery } from "react-query";
import { userLikedDataService } from "../services/user";

export const useFetchLikedData = (token) => {
  return useQuery("likedData", () => {
    return userLikedDataService.getLikedData(token);
  });
};
