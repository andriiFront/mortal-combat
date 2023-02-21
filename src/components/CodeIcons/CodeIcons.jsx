import styles from './CodeIcons.module.css'
import dino from '../../images/dino.png'
import dragon from '../../images/ninja.png'
import mk from '../../images/mk.png'
import { useDispatch } from 'react-redux'
import { 
  setFirstIcon,
  setSecondIcon,
  setThirdIcon,
  setFourthIcon,
  setFifthIcon,
  setSixthIcon
} from '../../store/actions'
import { useKeyDown } from '../../hooks/useKeyDown'

const icons = [mk, dragon, dino]

export function CodeIcons({ iconsValue }) {
  const dispatch = useDispatch();

  useKeyDown(() => {
    dispatch(setFirstIcon())
  }, ["q"]);

  useKeyDown(() => {
    dispatch(setSecondIcon())
  }, ["w"]);
  
  useKeyDown(() => {
    dispatch(setThirdIcon())
  }, ["e"]);
    
  useKeyDown(() => {
    dispatch(setFourthIcon())
  }, ["r"]);

  useKeyDown(() => {
    dispatch(setFifthIcon())
  }, ["t"]);

  useKeyDown(() => {
    dispatch(setSixthIcon())
  }, ["y"]);
    

  return  (
    <div className={styles.container}>
      {iconsValue.map(({ id, value }) => (
        <div key={id} className={styles.iconContainer}>
          <img
            alt='icon for coding'
            className={styles.icon}
            src={icons[value]}
          />
        </div>
      ))}
    </div>
  )
}
