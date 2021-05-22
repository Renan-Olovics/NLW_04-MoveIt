import { useContext } from 'react'

import { challegesContext } from '../Contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.scss'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(challegesContext)
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level} </header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
      ;
    </div>
  )
}
