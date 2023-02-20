import { useState } from "react";
import { useSelector } from "react-redux";
import { useKeyDown } from "./useKeyDown";

export const useActivePlayerTwo = () => {
  const [activePlayer, setActivePlayer] = useState(5)
  const unselectedPlayer = !useSelector(
    state => state.activePlayersReducer.secondPlayer.selected
  )
  
  useKeyDown(() => {
      (() => {
        if(unselectedPlayer && activePlayer < 15) {
          setActivePlayer(prev => ++prev)
        }
      })();
  }, ["c"]);

  useKeyDown(() => {
    (() => {
      if(unselectedPlayer && activePlayer > 1) {
        setActivePlayer(prev => --prev)
      }
    })();
  }, ["z"]);

  useKeyDown(() => {
    (() => {
      if(unselectedPlayer && activePlayer > 5) {
        setActivePlayer(prev => prev -= 5)
      }
    })();
  }, ["s"]);

  useKeyDown(() => {
    (() => {
      if(unselectedPlayer && activePlayer < 11) {
        setActivePlayer(prev => prev += 5)
      }
    })();
  }, ["x"]);

  return activePlayer
}
