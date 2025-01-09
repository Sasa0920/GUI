import React from 'react'
import './Footer.css'
import watsapp_icon from '../Assets/watsapp_icon.png'
import instergram_icon from '../Assets/instagram_icon.png'
import youtube_icon from '../Assets/youtube_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-title">
        <p>Ready to start cooking?</p>
      </div>
      <div className="footer-text">
        <p>Collect,create,share recipes with TasteBook</p>
      </div>
      <div className="footer-icons">
        <img src={watsapp_icon} alt="" />
        <img src={youtube_icon} alt="" />
        <img src={instergram_icon} alt="" />
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
      


    </div>
  )
}
