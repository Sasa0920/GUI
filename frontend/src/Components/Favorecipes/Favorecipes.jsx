import React from 'react'
import { useState,useEffect } from 'react'
import './Favorecipes.css'
import favo1 from '../Assets/favo1.jpg'
import favo2 from '../Assets/favo2.jpg'
import favo3 from '../Assets/favo3.jpg'
import favo4 from '../Assets/favo4.jpg'
import favo5 from '../Assets/favo5.jpg'
import favo6 from '../Assets/favo6.jpg'



export const Favorecipes = () => {
  const[favorites,setFavorites]=useState([]);

  useEffect(()=>{
    const fetchFavorites = async () => {
    try{
      const response = await fetch('http://localhost:4000/myfavourites');  
      const data = await response.json();
      setFavorites(data);
      console.log(data);
      
    }
    catch(err){
      console.error(err);
    }
  };
  
  fetchFavorites();
  },[]);

  const deleteFavorite=async(id)=>{
    try{
      const response=await fetch('http://localhost:4000/deletefavorite',{ 
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({id}),	
       });
       const data = await response.json();
       if(data.success){
         alert("Deleted from Favourites");
         setFavorites((prevFavorites)=>prevFavorites.filter(recipe=>recipe.id!==id));
       }
       else{
         alert("Failed to delete");
       }
    }
    catch(err)
    {
      console.error(err);
      alert("Something went wrong.Please try again");
    }
  }
  return (
    <div className="Favo">
      
      <div className="Favo-images1">
        {favorites.slice(0,3).map((recipe,index)=>(
          <img key={recipe.id}src={recipe.image || (index===0?favo1:index===1?favo2:favo3)} alt={recipe.name}/>
        ))}
      </div>
      <div className="Favo-text1">
        {favorites.slice(0,3).map((recipe)=>(
          <p key ={recipe.id}>{recipe.name}</p>
        ))}
      </div>
      <div className="button">
        {favorites.slice(0,3).map((recipe)=>(
          <button key={recipe.id} onClick={()=>deleteFavorite(recipe.id)}>Delete</button>
        ))}
      </div>
      <br/>
      <div className="Favo-images2">
        {favorites.slice(3,6).map((recipe,index)=>(
          <img key={recipe.id}src={recipe.image || (index===0?favo4:index===1?favo5:favo6)} alt={recipe.name}/>
        ))}
      </div>
      <div className="Favo-text2">
        {favorites.slice(3,6).map((recipe)=>(
          <p key ={recipe.id}>{recipe.name}</p>
        ))}
      </div>
      <div className="button">
        {favorites.slice(3,6).map((recipe)=>(
          <button key={recipe.id} onClick={()=>deleteFavorite(recipe.id)}>Delete</button>
        ))}
      </div>
      <br/>
    </div>
  )
}
