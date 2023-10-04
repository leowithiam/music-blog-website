import React from 'react'
import { Link } from 'gatsby'
import * as styles from './WindowCardsContainer.module.css'
import ArrowIcon from '../ArrowIcon/ArrowIcon'


export default function WindowCardsContainer() {
  return (
    <div className={styles.windowCardsContainer}>
        <div className={styles.windowCardsWrapper}>
            <div className={styles.windowCard}>
                <div className={styles.windowCardLine}></div>
                <div className={styles.windowCardCirclesContainer}>
                    <div className={styles.windowCardCircle}></div>
                    <div className={styles.windowCardCircle}></div>
                    <div className={styles.windowCardCircle}></div>
                </div>
                <div className={styles.windowCardContent}>
                    <div className={styles.windowCardText}>
                        <h3>FrostByte Unveiled: Crafting Planewaves in a 3D Audio World</h3>
                        <p>
                            FrostByte is an Ambisonic mono planewave encoder audio plugin, with implemented pantophonic stereo decode algorithms and featuring elevation and azimuth parameters.
                        </p>
                        <Link className={styles.cardLink} to="/">
                            Read Post
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
