import { create } from "zustand";

type AppState = {
  hasLoaded: boolean;
  setHasLoaded: (value: boolean) => void;
};

export const useAppStore = create<AppState>((set) => ({
  hasLoaded: false,
  setHasLoaded: (value) => set({ hasLoaded: value }),
}));


