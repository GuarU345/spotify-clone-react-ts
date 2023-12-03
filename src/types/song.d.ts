export interface Song {
  id: number;
  name: string;
  duration: string;
}

export interface SongLiked extends Song {
  artist: string;
  album: {
    id: number;
    name: string;
    image: string;
  };
}

export interface LikedSongs extends Song {
  liked: boolean;
}
