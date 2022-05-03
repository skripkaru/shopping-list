import { combineReducers } from 'redux'
import { reducers } from './product/reducers'

export const rootReducer = combineReducers({
  product: reducers,
})

export type RootState = ReturnType<typeof rootReducer>
