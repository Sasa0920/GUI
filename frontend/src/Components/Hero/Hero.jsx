import React from 'react'
import './Hero.css'
import hand from '../Assets/hand.png'
import girl from '../Assets/girl.jpg'

export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div>
          <div className="hero-hand-icon">
            <p>Start</p>
            <img src={hand} alt=""/>
          </div>
          <p>Building</p>
          <p>Your Recipes</p>
          
        </div>
        

      </div>
      <div className="hero-right">
        <img src={girl} alt=""/>

      </div>

    </div> )
}
