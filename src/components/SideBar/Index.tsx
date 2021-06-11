import styles from './styles.module.scss'
import { useRouter } from 'next/router'

function SideBar(): JSX.Element {
  const router = useRouter().pathname

  return (
    <div className={styles.behindContainer}>
      <div className={styles.container}>
        <header>
          <img src="/logo.svg" alt="" />
        </header>

        <nav>
          <a href="/">
            <div className={router === '/' ? `${styles.BlueBar}` : ''} />
            <img
              src={
                router === '/leaderboard'
                  ? '/icons/greyHouse.svg'
                  : '/icons/blueHouse.svg'
              }
              alt=""
            />
          </a>

          <a href="/leaderboard">
            <div
              className={router === '/leaderboard' ? `${styles.BlueBar}` : ''}
            />
            <img
              src={
                router === '/leaderboard'
                  ? '/icons/blueAward.svg'
                  : '/icons/greyAward.svg'
              }
              alt=""
            />
          </a>
        </nav>
      </div>
    </div>
  )
}

export default SideBar
