import {ModalAction, ModalActionTypes, ModalState} from "./types";

const initialState: ModalState = {
  isOpen: false
}

export const modalReducers = (state = initialState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      }
    case ModalActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}
