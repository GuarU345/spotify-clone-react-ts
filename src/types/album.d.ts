import { Artist } from "./artist";

export interface Album {
  id: number;
  name: string;
  release_date: string;
  album_image: string;
  artist_id: number;
  color_id: string;
  artist: Artist;
  color: Color;
}

export interface LikedAlbums {
  id: number;
  album: string;
  albumImage: string;
  artist: string;
}

type Color = {
  id: string;
  name: string;
  color: string;
};
