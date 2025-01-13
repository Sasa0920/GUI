import React from 'react'
import './Favourite.css'
import background6 from '../Assets/background6.jpg'


export const Favourite = () => {
  return (
    <div className="favourite">
     <img src={background6} alt="" />
     <p className="overlay-text">Add Your Favorite Recipes</p>
    </div>
  )
}
