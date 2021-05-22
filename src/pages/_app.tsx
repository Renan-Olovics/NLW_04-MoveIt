import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <div className={styles.HomePage}>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
