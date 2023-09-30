import React from 'react'
import { Link } from 'gatsby'
import * as styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.websiteHeader}>
        <div className="wrapper">
          <nav className={styles.navBar}>
            <p>
              <Link className={styles.navBarLink} id={styles.homeLink} to='/'>Plux</Link>
            </p>
            <ul>
              <li>
                <Link className={styles.navBarLink} to='#blog-section'>Blog</Link>
              </li>
              <li>
                <Link className={styles.navBarLink} to='#music-section'>Music</Link>
              </li>
              <li>
                <Link className={styles.navBarLink} to='#downloads-section'>Downloads</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}
