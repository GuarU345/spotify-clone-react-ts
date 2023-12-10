import { useQuery } from "react-query";
import { PlaylistService } from "../services/playlists";

export const useFetchPlaylistData = (token: string, id: string) => {
  return useQuery("playlistData", () => {
    return PlaylistService.getPlaylistDataById(token, id);
  });
};
