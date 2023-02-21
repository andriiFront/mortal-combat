import {
  SET_FIRST_ICON, 
  SET_SECOND_ICON,
  SET_THIRD_ICON,
  SET_FOURTH_ICON,
  SET_FIFTH_ICON,
  SET_SIXTH_ICON 
} from "./types"

const initialState = {
  icons: [
    {
      id: 0,
      value: 0
    },
    {
      id: 1,
      value: 0
    },
    {
      id: 2,
      value: 0
    },
    {
      id: 3,
      value: 0
    },
    {
      id: 4,
      value: 0
    },
    {
      id: 5,
      value: 0
    }
  ]
}

export const iconsReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_FIRST_ICON:
      return {
        ...state,
        icons: [...selectIcons(state.icons, 0)]
      }

    case SET_SECOND_ICON:
      return {
        ...state,
        icons: [...selectIcons(state.icons, 1)]
      }

    case SET_THIRD_ICON:
      return {
        ...state,
        icons: [...selectIcons(state.icons, 2)]
      }

    case SET_FOURTH_ICON:
      return {
        ...state,
        icons: [...selectIcons(state.icons, 3)]
      }

    case SET_FIFTH_ICON:
      return {
        ...state,
        icons: [...selectIcons(state.icons, 4)]
      }

    case SET_SIXTH_ICON:
      return {
        ...state,
        icons: [...selectIcons(state.icons, 5)]
      }


    default: 
      return state
  }
}

//////////////////////////////////////////////////
function setValue (value) {
  if (value < 2) {
    return value + 1
  }
  
  return 0
}

function selectIcons (arr, index) {
  return arr.map((icon, idx) => {
    if (idx === index) {
      return {
        ...icon,
        value: setValue(icon.value)
      }
    }
  
    return icon
  })
}

