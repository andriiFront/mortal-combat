import styles from './CardPlayer.module.css'

export function CardPlayer({
  icon,
  id,
  activePlayerOne,
  activePlayerTwo,
  selectedPlayerOne,
  selectedPlayerTwo
}) {

  return (
    <div className={`
      ${styles.card}
      ${+id === activePlayerOne && styles.activeOne}
      
      ${+id === activePlayerTwo && styles.activeTwo}
    `}>
      <img
        alt='player icon'
        className={`
          ${styles.img}
          ${selectedPlayerOne && +id === activePlayerOne && styles.selected}
          ${selectedPlayerTwo && +id === activePlayerTwo && styles.selected}
        `}
        src={icon}
      />
    </div>
  )
}
