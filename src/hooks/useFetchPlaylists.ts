import { useQuery } from "react-query";
import { PlaylistService } from "../services/playlists";

export const useFetchLikedSongsPlaylist = (token, id) => {
  return useQuery("playlistData", () => {
    return PlaylistService.getPlaylistDataById(token, id);
  });
};
