import React from 'react'
import './Myrecipes.css'
import chef1 from '../Assets/chef1.png'

export const Myrecipes = () => {
  return (
    <div className = "recipes">
      <div className="recipes-left">
              <p>Are You</p>
              <p>Ready To See</p>
              <p>Your Recipes Book ?</p>
            
      </div>
      
      <div className="recipes-right">
        <img src={chef1} alt="" />
      </div>
      
      
      
     </div>
    
  )
}
