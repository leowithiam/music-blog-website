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
          <div className="wrapper">
            <div className={styles.textSectionContent}>
              <div className={styles.textSectionText}>
                <h2>Blog</h2>
                <p>See what I’m currently experimenting with! Expect posts ranging from technical ventures into audio programming, to useful performance hacks for DJ’s.</p>
              </div>
            </div>
          </div>
        </section>
        <section id={styles.transitionSection1}></section>
        <section id="music-section" className={styles.textSection}>
          <div className="wrapper">
            <div className={styles.textSectionContent}>
              <div className={styles.textSectionText}>
                <h2>Music</h2>
                <p>I also produce my own music and release DJ mixes from time to time, here are my latest releases! </p>
              </div>
            </div>
          </div>
        </section>
        <section id={styles.transitionSection2}></section>
        <section id="downloads-section" className={styles.textSection}>
          <div className="wrapper">
            <div className={styles.textSectionContent}>
              <div className={styles.textSectionText}>
                <h2>Downloads</h2>
                <div className={styles.downloadItemsContainer}>
                  <div className={styles.downloadItem}>
                    <h3>Sound FX</h3>
                    <p>Some of the best Foley and audio FX I’ve made and recorded over the past few years!</p>
                    <button className={`buttonStyle ${styles.buttonDark}`}>Download</button>
                  </div>
                  <div className={styles.downloadItem}>
                    <h3>Samples</h3>
                    <p>Music production samples I’ve created over the years, expect highly transient snares and wompy kicks!</p>
                    <button className={`buttonStyle ${styles.buttonDark}`}>Download</button>
                  </div>
                  <div className={styles.downloadItem}>
                    <h3>Serum Presets</h3>
                    <p>Long live Serum! I’ve amassed my favourite original presets, some constructed for game sound design, others for EDM!</p>
                    <button className={`buttonStyle ${styles.buttonDark}`}>Download</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
