import { create } from 'zustand';

interface StoreProps {
  isNavOpen: boolean;

  setNavOpen: (state: boolean) => void;
}

const useStore = create<StoreProps>((set) => ({
  isNavOpen: false,

  setNavOpen: (state) => set({ isNavOpen: state }),
}));

export default useStore;
