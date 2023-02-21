import {
  SET_FIRST_PLAYER,
  SET_SECOND_PLAYER,
  SET_FIRST_ICON, 
  SET_SECOND_ICON,
  SET_THIRD_ICON,
  SET_FOURTH_ICON,
  SET_FIFTH_ICON,
  SET_SIXTH_ICON,
  SHOW_FIRST_PAGE,
  HIDE_FIRST_PAGE,
  SHOW_SECOND_PAGE,
  HIDE_SECOND_PAGE
} from "./types";

export function setFirstPlayer(payload) {
  return {
    type: SET_FIRST_PLAYER,
    payload
  }
}

export function setSecondPlayer(payload) {
  return {
    type: SET_SECOND_PLAYER,
    payload
  }
}

export function setFirstIcon() {
  return {
    type: SET_FIRST_ICON,
  }
}

export function setSecondIcon() {
  return {
    type: SET_SECOND_ICON,
  }
}

export function setThirdIcon() {
  return {
    type: SET_THIRD_ICON,
  }
}

export function setFourthIcon() {
  return {
    type: SET_FOURTH_ICON,
  }
}

export function setFifthIcon() {
  return {
    type: SET_FIFTH_ICON,
  }
}

export function setSixthIcon() {
  return {
    type: SET_SIXTH_ICON,
  }
}

export function showSecondPage() {
  return dispatch => {
    dispatch({
      type: SHOW_SECOND_PAGE,
    })

    setTimeout(() => {
      dispatch(hideSecondPage())
    }, 4000)
  }
}

export function changePages() {
  return dispatch => {
    setTimeout(() => {
      dispatch(hideFirstPage());
      dispatch(showSecondPage())
    }, 2000)
  }
}

export function hideFirstPage() {
  return {
    type: HIDE_FIRST_PAGE
  }
}

export function hideSecondPage() {
  return {
    type: HIDE_SECOND_PAGE
  }
}
