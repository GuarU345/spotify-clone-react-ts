export interface Song {
  id: string;
  name: string;
  duration: string;
}

export interface SongLiked {
  song: LikedSongs;
  artist: {
    name: string;
  };
  album: {
    id: number;
    name: string;
    image: string;
  };
}

export interface LikedSongs extends Song {
  liked: boolean;
}

export interface PlaylistSong {
  id: string;
  name: string;
  album: {
    name: string;
    image: string;
  };
  artist: {
    name: string;
  };
}
