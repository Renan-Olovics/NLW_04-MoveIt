import styles from './styles.module.scss'
import { useRouter } from 'next/router'

function SideBar(): JSX.Element {
  const router = useRouter().pathname

  return (
    <div className={styles.NavBar}>
      <header>
        <img src="/logo.svg" alt="" />
      </header>

      <nav>
        <a href="/">
          <div className={router === '/' ? `${styles.BlueBar}` : ''} />
          <img
            src={
              router === '/' ? '/icons/blueHouse.svg' : '/icons/greyHouse.svg'
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
  )
}

export default SideBar
