import React from 'react'
import * as styles from './DownloadsCard.module.css'

export default function DownloadsCard({ titleText, descriptionText }) {
  return (
    <div className={styles.downloadItem}>
        <h3>{ titleText }</h3>
        <p>{ descriptionText }</p>
        <button className="buttonStyle">Download</button>
    </div>
  )
}
