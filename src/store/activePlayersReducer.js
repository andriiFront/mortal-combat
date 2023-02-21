import {
  SET_FIRST_PLAYER,
  SET_SECOND_PLAYER
} from "./types"

const initialState = {
  firstPlayer: {
    selected: false,
    player: {
      "id": "11",
      "name": "Sektor",
      "icon": "https://wiki.supercombo.gg/images/0/04/UMK3_Sektor_Icon.png",
      "stanceImg": "https://wiki.supercombo.gg/images/6/61/Umk3_sektor_stance.gif",
      "poseImg": "https://wiki.supercombo.gg/images/5/5c/Umk3_Sektor_pose.png"
    }
  },
  secondPlayer: {
    selected: false,
    player: {
      "id": "11",
      "name": "Sektor",
      "icon": "https://wiki.supercombo.gg/images/0/04/UMK3_Sektor_Icon.png",
      "stanceImg": "https://wiki.supercombo.gg/images/6/61/Umk3_sektor_stance.gif",
      "poseImg": "https://wiki.supercombo.gg/images/5/5c/Umk3_Sektor_pose.png"
    }
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
