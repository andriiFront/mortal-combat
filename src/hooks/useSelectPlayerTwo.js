import { useKeyDown } from "./useKeyDown";
import { useDispatch } from "react-redux";
import { setSecondPlayer } from '../store/actions';

export const useSelectPlayerTwo = (player) => {
  const dispatch = useDispatch()

  useKeyDown(() => {
    dispatch(setSecondPlayer(player));
  }, ["v"]);
}
