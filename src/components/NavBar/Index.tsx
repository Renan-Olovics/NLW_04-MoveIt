import styles from './styles.module.scss'

function NavBar(): JSX.Element {
  return (
    <div className={styles.NavBar}>
      <header>
        <img src="/logo.svg" alt="" />
      </header>

      <nav>
        <a href="/">
          <img src="/icons/blueHouse.svg" alt="" />
        </a>
        <a href="/leaderboard">
          <img src="/icons/blueHouse.svg" alt="" />
        </a>
      </nav>
    </div>
  )
}

export default NavBar
