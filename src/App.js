import { CardsPlayers } from "./components/CardsPlayers/CardsPlayers";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const [visiblePageOne, setVisiblePageOne] = useState(true)
  const [visiblePageTwo, setVisiblePageTwo] = useState(false)
  const selectedPlayerOne = useSelector(
    state => state.activePlayersReducer.firstPlayer.selected
  )
  const selectedPlayerTwo = useSelector(
    state => state.activePlayersReducer.secondPlayer.selected
  )
  
  if(selectedPlayerOne && selectedPlayerTwo) {
    setTimeout(() => {
      setVisiblePageOne(false)
    }, 2000)
  }

  return (
    <div className="App">
      Mortal Combat

      {visiblePageOne && <CardsPlayers  />}
    </div>
  );
}

export default App;
