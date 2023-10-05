import React, { useState } from 'react'
import * as styles from './DownloadsCard.module.css'
import DownloadsModal from '../DownloadsModal/DownloadsModal'

export default function DownloadsCard({ titleText, descriptionText, downloadURL }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  let modal;
  if (isModalOpen) {
    modal = <DownloadsModal onClose={handleModalClose} downloadURL={downloadURL}/>
  }
  
  return (
    <div className={styles.downloadItem}>
        <h3>{ titleText }</h3>
        <p>{ descriptionText }</p>
        <button 
         className="buttonStyle buttonDark"
         onClick={handleDownloadClick}>Download</button>
        {modal}
    </div>
  )
}
