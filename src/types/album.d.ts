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
  name: string;
  image: string;
  artist: string;
}

export interface AlbumData {
  id: number;
  artist: string;
  name: string;
  image: string;
  color: string;
  songs: [{ id: number; name: string; duration: string }];
  type: string;
}

type Color = {
  id: string;
  name: string;
  color: string;
};
