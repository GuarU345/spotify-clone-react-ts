export interface Song {
  id: string;
  name: string;
  duration: string;
}

export interface SongLiked {
  song: Song;
  artist: {
    name: string;
  };
  album: {
    id: number;
    name: string;
    image: string;
  };
  liked: boolean;
}

export interface LikedSongs extends Song {
  liked: boolean;
}
