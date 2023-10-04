import React from 'react'
import { Link } from 'gatsby'
import * as styles from './WindowCard.module.css'
import ArrowIcon from '../ArrowIcon/ArrowIcon'

export default function WindowCard({ titleText, descriptionText, linkText, link, gap, children }) {
  return (
    <div className={styles.windowCard}>
        <div className={styles.windowCardLine}></div>
        <div className={styles.windowCardCirclesContainer}>
            <div className={styles.windowCardCircle}></div>
            <div className={styles.windowCardCircle}></div>
            <div className={styles.windowCardCircle}></div>
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
