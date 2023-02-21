import { combineReducers } from 'redux'
import { playersReducer } from './playersReducer'
import { activePlayersReducer } from './activePlayersReducer'
import { iconsReducer } from './iconsReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  playersReducer,
  activePlayersReducer,
  iconsReducer,
  appReducer
})
