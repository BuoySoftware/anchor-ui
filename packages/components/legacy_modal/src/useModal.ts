import { useState } from "react";

export type CloseModalHandler = () => void;

export interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: CloseModalHandler;
}

export const useModal = (): ModalState => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
