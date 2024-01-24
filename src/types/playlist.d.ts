interface Album {
  name: string;
  image: string;
}

interface Song {
  id: string;
  name: string;
}

interface Artist {
  name: string;
}

export interface Playlist {
  name: string;
  description: string | null;
  image: string;
  songs: {
    album: Album;
    song: Song;
    artist: Artist;
  }[];
  type: string;
}

export interface PlaylistInfo {
  id: string;
  name: string;
  image: string;
  author: string;
  type: string;
  haveSongs: boolean
}
