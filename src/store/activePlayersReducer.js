import {
  SET_FIRST_PLAYER,
  SET_SECOND_PLAYER
} from "./types"

const initialState = {
  firstPlayer: {
    selected: false,
    player: {}
  },
  secondPlayer: {
    selected: false,
    player: {}
  }
}

export const activePlayersReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_FIRST_PLAYER:
      return {
        ...state,
        firstPlayer: {
          selected: true,
          player: action.payload
        }
      }

    case SET_SECOND_PLAYER:
      return {
        ...state,
        secondPlayer: {
          selected: true,
          player: action.payload
        }
      }

    default: 
      return state
  }
}
