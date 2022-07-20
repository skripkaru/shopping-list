import { combineReducers } from 'redux'
import { productReducers } from './product/reducers'
import {modalReducers} from "./modal/reducers";

export const rootReducer = combineReducers({
  product: productReducers,
  modal: modalReducers,
})

export type RootState = ReturnType<typeof rootReducer>
