import React, { useState} from 'react'
import { Link } from 'gatsby'
import * as styles from './Header.module.css'

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <header className={styles.websiteHeader}>
        <div className="wrapper">
          <nav className={styles.navBar}>
            <p>
              <Link className={styles.navBarLink} id={styles.homeLink} to='/'>Plux</Link>
            </p>
            <ul id={styles.navBarLinksList}>
              <li>
                <Link className={styles.navBarLink} to='/#blog-section'>Blog</Link>
              </li>
              <li>
                <Link className={styles.navBarLink} to='/#music-section'>Music</Link>
              </li>
              <li>
                <Link className={styles.navBarLink} to='/#downloads-section'>Downloads</Link>
              </li>
            </ul>
            <div className={styles.menuIcon}>
              <img 
                src="/plux-icon-transparent.png"
                alt="Logo of Electronic Music Producer Plux" 
                onClick={toggleMenu}
                className={isOpen ? styles.rotated : ""}
                role="button"
                onKeyDown={toggleMenu}
                tabIndex={0}/>
            </div>
            {isOpen && (
              <ul className={styles.dropDownMenu}>
                <li>
                  <Link className={styles.navBarLink} to='/#blog-section'>Blog</Link>
                </li>
                <li>
                  <Link className={styles.navBarLink} to='/#music-section'>Music</Link>
                </li>
                <li>
                  <Link className={styles.navBarLink} to='/#downloads-section'>Downloads</Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>
  )
}
