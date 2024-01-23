import { create } from "zustand";
import { Howl } from "howler";
import { STREAMSONGS } from "../../public/songs";
import { PlaylistSong } from "../types/song";
import { Song } from "../types/playlist";
import { isUndefined } from "../utils/helpers";

interface CurrentMusic {
  id: string | null;
  songId: string | null;
  type: string | null;
  songs: PlaylistSong[] | Song[] | null;
}

interface State {
  sound: Howl | null;
  isPlaying: boolean;
  volume: number;
  duration: string | null;
  progress: string | null;
  currentMusic: CurrentMusic;
  currentSong: number;
}

interface Actions {
  setIsPlaying: (state: boolean) => void;
  setVolume: (state: number) => void;
  setCurrentMusic: (state: CurrentMusic) => void;
  setCurrentSong: (state: number) => void;
  setProgress: (state: string) => void;
  playMusic: () => void;
  goNextSong: () => void;
  goPreviousSong: () => void;
  changeVolume: (state: number) => void;
}

export const usePlayerStore = create<State & Actions>((set, get) => ({
  sound: null,
  isPlaying: false,
  volume: 0.1,
  duration: null,
  progress: null,
  currentMusic: { id: null, songId: null, type: null, songs: null },
  currentSong: 0,

  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setVolume: (volume) => set({ volume }),
  setCurrentMusic: (currentMusic) => {
    if (
      currentMusic.id !== get().currentMusic.id ||
      currentMusic.songId !== get().currentMusic.songId
    ) {
      const { sound } = get();
      if (sound) {
        sound.stop();
        set({ duration: null, progress: null });
      }
    }
    set({ currentMusic });
  },
  setCurrentSong: (currentSong) => set({ currentSong }),
  setProgress: (progress) => set({ progress }),
  playMusic: async () => {
    const { currentMusic, currentSong, volume } = get();
    const { songs } = currentMusic;
    const findSong = songs![currentSong];
    const foundSong = STREAMSONGS.find(
      (streamsong) => streamsong.name === findSong.name
    );

    if (isUndefined(foundSong)) throw new Error();

    const { track } = foundSong;

    const newSound = new Howl({
      src: [track],
      volume,
      html5: true,
      onloaderror: (error) => {
        console.error("Error durante la carga:", error);
      },
      onplayerror: (error) => {
        console.error("Error durante la reproducción:", error);
      },
    });

    newSound.on("load", () => {
      const newDuration = newSound.duration();
      set({ duration: newDuration });
    });

    newSound.play();
    set({ sound: newSound });
  },
  goNextSong: () => {
    const { currentMusic, currentSong, playMusic, sound } = get();
    const { songs } = currentMusic;
    const nextSong = (currentSong + 1) % songs!.length;
    set({ currentSong: nextSong });
    sound.stop();
    set({ duration: null, progress: null });
    playMusic();
  },
  goPreviousSong: () => {
    const { currentMusic, currentSong, playMusic, sound } = get();
    const { songs } = currentMusic;
    const previousSong = (currentSong - 1 + songs!.length) % songs!.length;
    set({ currentSong: previousSong });
    sound.stop();
    set({ duration: null, progress: null });
    playMusic();
  },
  changeVolume: (volume) => {
    const { sound } = get();
    if (sound !== null) {
      sound.volume(volume);
    }
  },
}));
