import { useContext } from 'react'
import { challegesContext } from '../Contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.scss'

interface userGithubProps {
  name: string
  avatar_url: string
  login: string
}

interface profileProps {
  userGithub: userGithubProps[]
}

export function Profile(props: profileProps): JSX.Element {
  const { level } = useContext(challegesContext)
  const user: userGithubProps = props.userGithub

  return (
    <div className={styles.profileContainer}>
      <img src={user.avatar_url} alt={user.login} />
      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
