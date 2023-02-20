import {
  SET_FIRST_PLAYER,
  SET_SECOND_PLAYER
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
