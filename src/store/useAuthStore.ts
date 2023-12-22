import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserData {
  token: string | null;
  user_id: string | null;
}

interface State {
  isLogin: boolean;
  userData: UserData;
}

interface Actions {
  setIsLogin: (state: boolean) => void;
  setUserData: (state: UserData) => void;
}

export const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      isLogin: false,
      userData: { token: null, user_id: null },
      setIsLogin: (state) => set({ isLogin: state }),
      setUserData: (state) => set({ userData: state }),
    }),
    {
      name: "userData",
    }
  )
);
