export interface ModalState {
  isOpen: boolean
}

export enum ModalActionTypes {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL'
}

interface OpenModalActions {
  type: ModalActionTypes.OPEN_MODAL
  isOpen: boolean
}

interface CloseModalActions {
  type: ModalActionTypes.CLOSE_MODAL
  isOpen: boolean
}

export type ModalAction =
  | OpenModalActions
  | CloseModalActions
