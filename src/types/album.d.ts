import { Artist } from "./artist";
import { Song } from "./song";

export interface Album {
  id: string;
  name: string;
  release_date: string;
  album_image: string;
  artist_id: number;
  color_id: string;
  artist: Artist;
  color: Color;
}

export interface LikedAlbums {
  id: string;
  name: string;
  image: string;
  artist: string;
}

export interface AlbumData {
  id: string;
  artist: string;
  name: string;
  image: string;
  color: string;
  songs: Song[];
  type: string;
}

type Color = {
  id: string;
  name: string;
  color: string;
};
