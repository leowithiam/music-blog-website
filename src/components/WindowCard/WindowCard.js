import React from 'react'
import { Link } from 'gatsby'
import * as styles from './WindowCard.module.css'
import ArrowIcon from '../ArrowIcon/ArrowIcon'

export default function WindowCard({ titleText, descriptionText, linkText, link, gap, goForward, goBackward, children }) {



  return (
    <div className={styles.windowCard}>
        <div className={styles.windowCardLine}></div>
        <div className={styles.windowCardCirclesContainer}>
            <div 
                className={styles.windowCardCircle}
                onClick={goBackward}
                role="button"
                onKeyDown={goBackward}
                tabIndex={0}>
            </div>
            <div
                className={styles.windowCardCircle}
                onClick={goForward}
                role="button"
                onKeyDown={goForward}
                tabIndex={0}>
            </div>
            <div className={styles.windowCardCircle}>
                <Link 
                    className={styles.expandWindowLink}
                    to={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    role="button">
                </Link>
            </div>
        </div>
        <div className={styles.windowCardContent}>
            <div className={styles.windowCardText} style={{ gap: gap }}>
                <h3>{titleText}</h3>
                {children}
                <p>{descriptionText}</p>
            </div>
        </div>
        <Link 
        className={styles.cardLink} 
        to={link}
        target="_blank" 
        rel="noopener noreferrer">
            {linkText}
            <ArrowIcon />
        </Link>
    </div>
  )
}
