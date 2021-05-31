import { useContext } from 'react'
import { challegesContext } from '../Contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.scss'

export function Profile() {
  const { level } = useContext(challegesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/renan-olovics.png" alt="Renan Olovics" />
      <div>
        <strong>Renan Olovics</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
