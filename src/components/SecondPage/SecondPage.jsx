import styles from './SecondPage.module.css'
import Dragon from '../../images/dragon.png'
import Vs from '../../images/vs.png'
import { useSelector } from 'react-redux'
import { CodeIcons } from '../CodeIcons/CodeIcons'
import { useMessageCreator } from '../../hooks/useMessageCreator.js'

export function SecondPage() {
  const playerOneImgSrc = useSelector(
    state => state.activePlayersReducer.firstPlayer.player.poseImg
  )
  const playerTwoImgSrc = useSelector(
    state => state.activePlayersReducer.secondPlayer.player.poseImg
  )

  const iconsValue = useSelector(state => state.iconsReducer.icons)
  
  const message = useMessageCreator(iconsValue)

  return (
    <div className={styles.container}>

      <h1 className={styles.message}>{message}</h1>

      <div className={styles.topContainer}>
        <img alt='left logo' className={styles.dragonLeft} src={Dragon} />
        <img alt='vs' className={styles.vs} src={Vs} />
        <img alt='left logo' className={styles.dragonRight} src={Dragon} />
      </div>
      
      <div className={styles.bottomContainer}>
        <img alt='player1' className={styles.playerOne} src={playerOneImgSrc} />

        <CodeIcons iconsValue={iconsValue} />

        <img alt='player2' className={styles.playerTwo} src={playerTwoImgSrc} />
      </div>
      
    </div>
  )
}
