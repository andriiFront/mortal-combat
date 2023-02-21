import { FirstPage } from "./components/FirstPage/FirstPage";
import { SecondPage } from "./components/SecondPage/SecondPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { changePages } from "./store/actions";

function App() {
  const dispatch = useDispatch()
  const { visibleFirstPage, visibleSecondPage } = useSelector(state => state.appReducer)
  const selectedPlayerOne = useSelector(
    state => state.activePlayersReducer.firstPlayer.selected
  )
  const selectedPlayerTwo = useSelector(
    state => state.activePlayersReducer.secondPlayer.selected
  )

  useEffect(() => {
    if (selectedPlayerOne && selectedPlayerTwo) {
      dispatch(changePages())
    }
  }, [selectedPlayerOne, selectedPlayerTwo])
  

  return (
    <div className="App">
      {visibleFirstPage && <FirstPage />}
      {visibleSecondPage && <SecondPage />}
    </div>
  );
}

export default App;
