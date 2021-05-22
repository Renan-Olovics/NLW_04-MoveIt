import { useContext } from 'react'
import { challegesContext } from '../Contexts/ChallengesContext'
import styles from '../styles/components/CompletedChalleges.module.scss'

export function CompletedChalleges() {
  const { challengesCompleted } = useContext(challegesContext)
  return (
    <div className={styles.completedChallegesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}
