import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      isLogin: false,
      token: null,
      setIsLogin: (state) => set({ isLogin: state }),
      setToken: (state) => set({ token: state }),
    }),
    {
      name: "token",
    }
  )
);
