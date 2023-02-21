import {
  SHOW_FIRST_PAGE,
  HIDE_FIRST_PAGE,
  SHOW_SECOND_PAGE,
  HIDE_SECOND_PAGE
} from "./types";

const initialState = {
  visibleFirstPage: true,
  visibleSecondPage: false
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_FIRST_PAGE:
      return {
        ...state,
        visibleFirstPage: true
      }
    
    case HIDE_FIRST_PAGE:
      return {
        ...state,
        visibleFirstPage: false
      }

    case SHOW_SECOND_PAGE:
      return {
        ...state,
        visibleSecondPage: true
      }
    
    case HIDE_SECOND_PAGE:
      return {
        ...state,
        visibleSecondPage: false
      }

    default:
      return state
  }
}
