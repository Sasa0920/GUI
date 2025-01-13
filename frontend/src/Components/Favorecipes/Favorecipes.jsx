import React from 'react'
import './Favorecipes.css'
import favo1 from '../Assets/favo1.jpg'
import favo2 from '../Assets/favo2.jpg'
import favo3 from '../Assets/favo3.jpg'
import favo4 from '../Assets/favo4.jpg'
import favo5 from '../Assets/favo5.jpg'
import favo6 from '../Assets/favo6.jpg'

export const Favorecipes = () => {
  return (
    <div className="Favo">
      
      <div className="Favo-images1">
        <img src={favo1} alt="" />
        <img src={favo2} alt="" />
        <img src={favo3} alt="" />
      </div>
      <div className="Favo-text1">
        <p>Vegetable Cuttlets</p>
        <p>Mix Fried Rice</p>
        <p>Chicken Kottu</p>
      </div>
      <br/>

      <div className="Favo-images2">
        <img src={favo4} alt="" />
        <img src={favo5} alt="" />
        <img src={favo6} alt="" />
      </div>
      <div className="Favo-text2">
        <p>Chicken Biryani</p>
        <p>Sri Lankan Pittu</p>
        <p>String Hoppers</p>
      </div>
      <br/>
    </div>
  )
}
