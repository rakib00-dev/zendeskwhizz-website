// utils/modalState.ts
import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  toggleIsModalOpen: () => void;
}

export const useModalState = create<ModalState>((set) => ({
  isModalOpen: false,
  toggleIsModalOpen: () =>
    set((state) => ({ isModalOpen: !state.isModalOpen })),
}));
