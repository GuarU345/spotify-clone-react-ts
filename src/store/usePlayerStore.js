import { create } from "zustand";
import { Howl } from "howler";
import { STREAMSONGS } from "../../public/songs";

export const usePlayerStore = create((set, get) => ({
  sound: null,
  isPlaying: false,
  volume: 0.1,
  duration: "0:00",
  progress: "0:00",
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
        set({ duration: "0:00", progress: "0:00" });
      }
    }
    set({ currentMusic });
  },
  setCurrentSong: (currentSong) => set({ currentSong }),
  setProgress: (progress) => set({ progress }),
  playMusic: async () => {
    const { currentMusic, currentSong, volume, setProgress } = get();
    const { songs } = currentMusic;
    const findSong = songs[currentSong];
    let { track } = STREAMSONGS.find(
      (streamsong) => streamsong.name === findSong.name
    );
    const newSound = new Howl({
      src: [track],
      volume,
      onseeked: () => {
        setProgress(newSound.seek());
      },
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
    const nextSong = (currentSong + 1) % songs.length;
    set({ currentSong: nextSong });
    sound.stop();
    set({ duration: "0:00", progress: "0:00" });
    playMusic();
  },
  goPreviousSong: () => {
    const { currentMusic, currentSong, playMusic, sound } = get();
    const { songs } = currentMusic;
    const previousSong = (currentSong - 1 + songs.length) % songs.length;
    set({ currentSong: previousSong });
    sound.stop();
    set({ duration: "0:00", progress: "0:00" });
    playMusic();
  },
  changeVolume: (volume) => {
    const { sound } = get();
    if (sound !== null) {
      sound.volume(volume);
    }
  },
}));
