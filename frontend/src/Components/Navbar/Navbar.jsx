import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const[menu,setMenu] = useState("home")
  return (
    <div className ='navbar'>
       <p class= "navbar-text">TasteBook</p>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link  style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("create recipe")}}><Link style={{textDecoration:'none'}} to='/createrecipe'>Create Recipe</Link>{menu==="create recipe"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("my recipes")}}><Link style={{textDecoration:'none'}} to='/myrecipe'>My Recipes</Link>{menu==="my recipes"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("favourites")}}><Link style={{textDecoration:'none'}} to='/favourite'>Favourites</Link>{menu==="favourites"?<hr/>:<></>}</li>

      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/loginsignup'><button>Get Started</button></Link>}
      </div>
    </div>
  )
}
