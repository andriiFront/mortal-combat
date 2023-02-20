import { useKeyDown } from "./useKeyDown";
import { useDispatch } from "react-redux";
import { setFirstPlayer } from '../store/actions';

export const useSelectPlayerOne = (player) => {
  const dispatch = useDispatch()

  useKeyDown(() => {
    dispatch(setFirstPlayer(player));
  }, ["Enter"]);
}
