import Head from 'next/head'
import SideBar from '../components/SideBar/Index'
import { LeaderboardApi } from '../services/leaderboardApi'
import styles from '../styles/leaderboard.module.scss'

interface usersProps {
  id: string
  git: string
  name: string
  level: number
  challenges: number
  experience: number
}
interface leaderboardProps {
  leaderboardList: usersProps[]
}

export default function Leaderboard(props: leaderboardProps) {
  return (
    <div className={styles.leaderboardPage}>
      <Head>
        <title>Início | Leaderboard</title>
      </Head>
      <SideBar />
      <div className={styles.container}>
        <h1>Leaderboard</h1>

        <table>
          <thead>
            <tr>
              <th>POSIÇÃO</th>
              <th>
                <section>
                  <p>USUÁRIO</p> <p>EXPERIÊNCIA</p>
                </section>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.leaderboardList.map((data, index) => {
              return (
                <>
                  <tr key={data.id}>
                    <td>
                      <h3>{index + 1}</h3>
                    </td>

                    <td className={styles.userInfo}>
                      <img
                        src={`http://www.github.com/${data.git}.png`}
                        alt={data.name}
                        width={64}
                        height={64}
                      />

                      <section>
                        <div>
                          <h3>{data.name}</h3>
                          <p>
                            <img src="/icons/level.svg" alt="levelIcon" />
                            {` Level ${data.level}`}
                          </p>
                        </div>

                        <div>
                          <p className={styles.blueText}>{data.challenges}</p>
                          <p>completados</p>
                          <p className={styles.blueText}>{data.experience}</p>
                          <p>xp</p>
                        </div>
                      </section>
                    </td>
                  </tr>
                  <div />
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await LeaderboardApi.get('users', {
    params: {
      _limit: 10,
      _sort: 'level',
      _order: 'desc',
    },
  })

  const leaderboardList = data.map((leaderboard) => {
    return {
      id: leaderboard.id,
      git: leaderboard.git,
      name: leaderboard.name,
      level: leaderboard.level,
      challenges: leaderboard.challenges,
      experience: leaderboard.experience,
    }
  })

  return {
    props: {
      leaderboardList,
    },
    revalidate: 60 * 10, //  10min
  }
}
