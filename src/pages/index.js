import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout/Layout"
import DownloadsCard from "../components/DownloadsCard/DownloadsCard"
import * as styles from './index.module.css'
import WindowCard from '../components/WindowCard/WindowCard'
import WindowCardCarousel from '../components/WindowCardCarousel/WindowCardCarousel'

const blogCardsValues = {
  linkText: "Read Post",
  gap: "2rem",
}

const blogCardsData = [
  {
    titleText: "FrostByte Unveiled: Crafting Planewaves in a 3D Audio World",
    descriptionText: "FrostByte is an Ambisonic mono planewave encoder audio plugin, with implemented pantophonic stereo decode algorithms and featuring elevation and azimuth parameters.",
    link: "/",
    linkText: blogCardsValues.linkText,
    gap: blogCardsValues.gap
  },
  {
    titleText: "Journeying Beyond Stereo: Developing Event Horizon",
    descriptionText: "Event Horizon is a stereo-widener plugin, utilising the Blumlein mid-side pseudo-stereo technique to provide separately alterable mid and side signal parameters for stereo audio formats.",
    link: "/",
    linkText: blogCardsValues.linkText,
    gap: blogCardsValues.gap
  },
  {
    titleText: "Mixing to Making: How Understanding Music Keys Can Elevate Your DJ Game",
    descriptionText: "An understanding of the circle of fifths, and music key counterparts to camelot key codes can be a helpful first step in bridging the gap between DJing, improvisation and music production.",
    link: "/",
    linkText: blogCardsValues.linkText,
    gap: blogCardsValues.gap
  }
]

const musicCardsValues = {
  linkText: "Listen Here",
  gap: "1rem"
}

const musicCardsData = [
  {
    titleText: "Garage & House Mix",
    descriptionText: "Dive deep into the serene waves of this house and garage blend 🌙",
    link: "https://www.mixcloud.com/pluxdnb/plux-house-garage-mix-1/",
    linkText: musicCardsValues.linkText,
    gap: musicCardsValues.gap,
    children: (
      <iframe 
        width="90%" 
        height="120" 
        src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fpluxdnb%2Fplux-house-garage-mix-1%2F" frameborder="0"
        title="Garage & House Mix">
      </iframe>
    )
  },
  {
    titleText: "Melodic Drum & Bass Mix",
    descriptionText: "Get lost in the lush melodies of this melodic mix, featuring powerful bass lines!💥",
    link: "https://www.mixcloud.com/pluxdnb/plux-drum-bass-mix-3/",
    linkText: musicCardsValues.linkText,
    gap: musicCardsValues.gap,
    children: (
      <iframe 
        width="90%" 
        height="120" 
        src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fpluxdnb%2Fplux-drum-bass-mix-3%2F" frameborder="0"
        title="Melodic Drum & Bass Mix">
      </iframe>
    )
  },
  {
    titleText: "Plux - I Wish",
    descriptionText: "A Future Bass track I released in 2021. Nothing beats super saws and vocal chops! 🎧",
    link: "/",
    linkText: musicCardsValues.linkText,
    gap: musicCardsValues.gap,
    children: (
      <iframe 
        width="90%" 
        height="120" 
        frameborder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1085548315&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        title="Plux - I Wish">
      </iframe>
    )
  }
]

export default function Home() {
  return (
    <Layout>
      <main>
        <section id="hero-section">
          <div className={styles.heroImage}
               role="img" 
               aria-label="Black, Silver and Teal Music Mixing Desk with Many Buttons and Potentiometers">
            <div className="wrapper">
              <div className={styles.heroContent}>
                <h1>Exploring the Intersection of Melody, Machines & Mind</h1>
                <p>
                  I like tinkering with music and tech! Here I document my explorations into music production, audio programming and DJing, hoping to distil information I pick up along the way to help other budding music tech enthusiasts!
                </p>
                <div className={styles.heroButtons}>
                  <Link className={`buttonStyle ${styles.heroButtonDark}`} to="#blog-section">Read More</Link>
                  <Link className="buttonStyle buttonLight"  to="#music-section">My Music</Link>
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
                <p>
                  See what I’m currently experimenting with! Expect posts ranging from technical ventures into audio programming, to useful performance hacks for DJ’s.
                </p>
                <div className={styles.windowCardsContainer}>
                  <WindowCardCarousel cardsData={blogCardsData} />
                </div>
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
                <div className={styles.windowCardsContainer}>
                  <WindowCardCarousel cardsData={musicCardsData} />
                  <Link 
                  className="buttonStyle buttonDark" 
                  to="https://linktr.ee/pluxdnb"
                  target="_blank" 
                  rel="noopener noreferrer">
                    More Music
                  </Link>
                </div>
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
                <div className={styles.downloadCardsContainer}>
                  <DownloadsCard
                    titleText="Sound FX"
                    descriptionText="Some of the best Foley and audio FX I’ve made and recorded over the past few years, featuring game & film audio FX!"
                    downloadURL="/sound-fx.zip"
                  />
                  <DownloadsCard
                    titleText="Samples"
                    descriptionText="Music production samples I’ve used and refined over the years, expect highly transient snares and wompy kicks!"
                    downloadURL="/samples.zip"
                  />
                  <DownloadsCard
                    titleText="Serum Presets"
                    descriptionText="Long live Serum! I’ve amassed my favourite original presets, some constructed for game sound design, others for EDM!"
                    downloadURL="/serum-presets.zip"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
