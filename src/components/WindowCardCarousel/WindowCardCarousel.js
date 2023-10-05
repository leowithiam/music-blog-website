import React, { useState } from 'react'
import WindowCard from '../WindowCard/WindowCard'
import * as styles from './WindowCardCarousel.module.css'
import ForwardsButton from '../WindowCardCarouselButtons/ForwardsButton'
import BackwardsButton from '../WindowCardCarouselButtons/BackwardsButton'


export default function WindowCardCarousel({ cardsData }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goForward = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }

    const goBackward = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
    }

    return (
        <div className={styles.carouselContainer}>
            <WindowCard {...cardsData[currentIndex]} />
            <button className={styles.backButton} onClick={goBackward}>
                <BackwardsButton />
            </button>
            <button className={styles.forwardButton} onClick={goForward}>
                <ForwardsButton />
            </button>
        </div>
    )
}
