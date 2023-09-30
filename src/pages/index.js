import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout/Layout"
import * as styles from './index.module.css'

 
export default function Home() {
  return (
    <Layout>
      <main>
        <section id="hero-section">
          <div className={styles.heroImage}>
            <div className="wrapper">
              <div className={styles.heroContent}>
                <h1>Exploring the Intersection of Melody, Machines & Mind</h1>
                <p>
                  I like tinkering with music and tech! Here I document my explorations into music production, audio programming and DJing, hoping to distil information I pick up along the way to help other budding music tech enthusiasts!
                </p>
                <div className={styles.heroButtons}>
                  <Link className={`buttonStyle ${styles.buttonDark}`} to="#blog-section">Read More</Link>
                  <Link className={`buttonStyle ${styles.buttonLight}`} to="#music-section">My Music</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="blog-section" className={styles.textSection}>
        </section>
        <section id={styles.transitionSection1}></section>
        <section id="music-section" className={styles.textSection}>
        </section>
        <section id={styles.transitionSection2}></section>
        <section id="downloads-section" className={styles.textSection}>
        </section>
      </main>
    </Layout>
  )
}
