import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import styles from '../styles/Welcome.module.scss'

export default function Welcome(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)
  const [gitUser, setGitUser] = useState('')
  const { push } = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    if (gitUser) {
      push(`/${gitUser}`)
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <img src="/Welcome/WelcomeIcon.svg" alt="" />
      </div>

      <div>
        <header role="banner">
          <img src="/Welcome/MoveItLogo.svg" alt="" />
        </header>

        <h1>Bem-Vindo</h1>

        <figure>
          <img src="/Welcome/git.svg" alt="" />
          <figcaption>Faça login com seu Github para começar</figcaption>
        </figure>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              onChange={(e) => setGitUser(e.target.value)}
              ref={inputRef}
              placeholder="Digite seu username"
            />
            <a href={handleSubmit} type="submit">
              <img src="/Welcome/rightArrow.svg" alt="Login" />
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
