import { CardsPlayers } from "../CardsPlayers/CardsPlayers";
import styles from './FirstPage.module.css'

export function FirstPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        SELECT YOUR FIGHTER
      </h1>
      
      <CardsPlayers />
      
      <h2 className={styles.footer}>
        KOMBAT ZONE: SOUL CHAMBER
      </h2>
    </div>
  )
}
