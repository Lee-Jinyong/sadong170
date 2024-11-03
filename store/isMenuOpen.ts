// 메뉴 창 관리하는 상태

import { create, StateCreator } from 'zustand';

interface storeIsMenuOpen {
  isMenuOpen: boolean;
  open: () => void;
  close: () => void;
  change: () => void;
}

const stateIsMenuOpen: StateCreator<storeIsMenuOpen> = (set) => {
  const open = () => {
    set({ isMenuOpen: true });
  };
  const close = () => {
    set({ isMenuOpen: false });
  };
  const change = () => {
    set((state) => ({ isMenuOpen: !state.isMenuOpen }));
  };

  return {
    isMenuOpen: false,
    open,
    close,
    change,
  };
};

export const useIsMenuOpen = create<storeIsMenuOpen>(stateIsMenuOpen);
