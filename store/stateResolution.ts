import { create, StateCreator } from 'zustand';

interface stateResolution {
  width: number;
  setWidth: (width: number) => void;
}

const stateResolution: StateCreator<stateResolution> = (set, get) => {
  const setWidth = (width: number) => {
    set({ width });
  };

  return {
    width: window.innerWidth,
    setWidth,
  };
};

export const useResolution = create<stateResolution>(stateResolution);
