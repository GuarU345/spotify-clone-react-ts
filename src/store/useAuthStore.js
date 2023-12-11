import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
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
