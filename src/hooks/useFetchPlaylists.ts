import { useQuery } from "react-query";
import { PlaylistService } from "../services/playlists";

export const useFetchPlaylistData = (
  token: string,
  id: string,
  userId: string
) => {
  return useQuery("playlistData", () => {
    return PlaylistService.getPlaylistDataById(token, id, userId);
  });
};

export const useFetchUserPlaylists = (token: string, id: string) => {
  return useQuery("userPlaylists", async () => {
    const result = await PlaylistService.getUserPlaylists(token, id);
    return result.filter((res) => res.name !== "Canciones que te gustan");
  });
};

export const useFetchUserPlaylistsCount = (token: string, id: string) => {
  return useQuery("userPlaylistsCount", async () => {
    return await PlaylistService.getUserPlaylistsCount(token, id)
  })
}