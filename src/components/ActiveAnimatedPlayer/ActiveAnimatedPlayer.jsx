import styles from './ActiveAnimatedPlayer.module.css'

export function ActiveAnimatedPlayer({ img, mirrorImg }) {

  return (
    <div className={styles.container}>
      <img
        alt='player icon'
        className={`
          ${styles.img}
          ${mirrorImg && styles.mirrorImg}
        `}
        src={img}
      />
    </div>
  )
}
