import React, { useEffect, useState } from 'react'
import './hero-banner.scss'
import { MovieData } from '../../../../Data/MovieData'
import { AiOutlineInfoCircle, AiOutlinePlayCircle } from 'react-icons/ai'

const HeroBanner = () => {

    const [ randomBanner, setRandomBanner ] = useState({})

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * MovieData.length)
        setRandomBanner(MovieData[randomIndex])
    },[])

  return (
    <div className="hero-banner">
        <img src={randomBanner.image} alt={randomBanner.title} className='hero-banner-img' />
        <div className="hero-banner-overlay">
            <div className="hero-banner-content">
                <img className='hero-banner-logo' src={randomBanner.logoImage} alt={randomBanner.title} />
                <h3 className='hero-banner-desc'>{randomBanner.description}</h3>
                <div className="hero-banner-btns">
                    <button className='hero-banner-btn hero-banner-play'><AiOutlinePlayCircle /><h1>Play</h1></button>
                    <button className='hero-banner-btn hero-banner-info'><AiOutlineInfoCircle /><h1>More Info</h1></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner