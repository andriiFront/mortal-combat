import { useState } from "react";
import { useSelector } from "react-redux";
import { useKeyDown } from "./useKeyDown";

export const useActivePlayer = () => {
  const [activePlayer, setActivePlayer] = useState(1)
  const unselectedPlayer = !useSelector(
    state => state.activePlayersReducer.firstPlayer.selected
  )
  
  useKeyDown(() => {
      (() => {
        if(unselectedPlayer && activePlayer < 15) {
          setActivePlayer(prev => ++prev)
        }
      })();
  }, ["ArrowRight"]);

  useKeyDown(() => {
    (() => {
      if(unselectedPlayer && activePlayer > 1) {
        setActivePlayer(prev => --prev)
      }
    })();
  }, ["ArrowLeft"]);

  useKeyDown(() => {
    (() => {
      if(unselectedPlayer && activePlayer > 5) {
        setActivePlayer(prev => prev -= 5)
      }
    })();
  }, ["ArrowUp"]);

  useKeyDown(() => {
    (() => {
      if(unselectedPlayer && activePlayer < 11) {
        setActivePlayer(prev => prev += 5)
      }
    })();
  }, ["ArrowDown"]);

  return activePlayer
}
