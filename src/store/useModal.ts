import { create } from "zustand";

interface ModalState {
  id: string | symbol
  props: any
}

interface ModalElement {
  [key: string | symbol]: React.ElementType
}

interface State {
  isOpen: boolean,
  select: ModalState | null,
  modals: ModalElement
}

interface Actions {
  showModal: <T = unknown>(id: string | symbol, props?: T) => void;
  hideModal: () => void;
}

// LLENAR AQUI LOS MODALES
const modals = {}

export const useModal = create<State & Actions>((set) => ({
  isOpen: false,
  select: null,
  modals,
  showModal: <T = unknown>(id: string | symbol, props: T) => set({
    isOpen: true,
    select: {
      id, props
    }
  }),
  hideModal: () => set({ select: null, isOpen: false })
}))
