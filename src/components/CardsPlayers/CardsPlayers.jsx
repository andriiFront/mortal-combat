import styles from './CardsPlayers.module.css'
import { useSelector } from "react-redux"
import { CardPlayer } from '../CardPlayer/CardPlayer'
import { ActiveAnimatedPlayer } from '../ActiveAnimatedPlayer/ActiveAnimatedPlayer';
import { useActivePlayer } from '../../hooks/useActivePlayer';
import { useActivePlayerTwo } from '../../hooks/useActivePlayerTwo';
import { useSelectPlayerOne } from '../../hooks/useSelectPlayerOne';
import { useSelectPlayerTwo } from '../../hooks/useSelectPlayerTwo';

export function CardsPlayers() {
  const players = useSelector(state => state.playersReducer.players)
  const selectedPlayerOne = useSelector(
    state => state.activePlayersReducer.firstPlayer.selected
  )
  const selectedPlayerTwo = useSelector(
    state => state.activePlayersReducer.secondPlayer.selected
  )
  const activePlayerOne = useActivePlayer()
  const activePlayerTwo = useActivePlayerTwo()
  useSelectPlayerOne(players[activePlayerOne - 1])
  useSelectPlayerTwo(players[activePlayerTwo - 1])

  return (
    <div className={styles.container}>
      
      <ActiveAnimatedPlayer
        img={players[activePlayerOne - 1]['stanceImg']}
      />

      <div className={styles.containerIcon}>
        {players.map(({ icon, id }) => (
          <CardPlayer
            key={id}
            id={id}
            icon={icon}
            activePlayerOne={activePlayerOne}
            activePlayerTwo={activePlayerTwo}
            selectedPlayerOne={selectedPlayerOne}
            selectedPlayerTwo={selectedPlayerTwo}
          />
        ))}
      </div>

      <ActiveAnimatedPlayer
        img={players[activePlayerTwo - 1]['stanceImg']}
        mirrorImg={true}
      />

    </div>
    
  )
}
