interface Album {
  name: string;
  image: string;
}

interface Song {
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
