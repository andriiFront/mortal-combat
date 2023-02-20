import { combineReducers } from 'redux'
import { playersReducer } from './playersReducer'
import { activePlayersReducer } from './activePlayersReducer'

export const rootReducer = combineReducers({
  playersReducer,
  activePlayersReducer
})
