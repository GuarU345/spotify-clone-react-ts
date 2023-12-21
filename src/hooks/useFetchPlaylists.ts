import { useQuery } from "react-query";
import { PlaylistService } from "../services/playlists";

export const useFetchPlaylistData = (token: string, id: string) => {
  return useQuery("playlistData", () => {
    return PlaylistService.getPlaylistDataById(token, id);
  });
};

export const useFetchUserPlaylists = (token: string, id: string) => {
  return useQuery("userPlaylists", async () => {
    const result = await PlaylistService.getUserPlaylists(token, id);
    return result.filter((res) => res.name !== "Canciones que te gustan");
  });
};
