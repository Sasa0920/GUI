import React from 'react'
import './Popular.css'
import prown_salad from '../Assets/prown_salad.jpg'
import chicken_ramen_noodle from '../Assets/chicken_ramen_noodle.jpg'
import friedrice from '../Assets/friedrice.jpg'
import cheesepizza from '../Assets/cheesepizza.jpg'

export const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR RECIPES</h1>
      <hr/>
      <div className="popular-recipe">
        <img src={prown_salad} alt=""/>
        <img src={chicken_ramen_noodle} alt=""/>
        <img src={friedrice} alt=""/>
        <img src={cheesepizza} alt=""/> 
      </div>
      <div className="text">
      <p>Prawn Salad</p>
      <p>Ramen Noodles</p>
      <p>Fried Rice</p>
      <p>Cheese Pizza</p>
      </div>

    </div>
  )
}
