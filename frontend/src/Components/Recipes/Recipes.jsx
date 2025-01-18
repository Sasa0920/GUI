import React from 'react'
import{useState,useEffect} from 'react'
import './Recipes.css'
import soup from '../Assets/soup.jpg'
import Pizza from '../Assets/Pizza.jpg'
import noodles from '../Assets/noodles.jpg'
import nasigoreng from '../Assets/nasigoreng.jpg'
import roti from '../Assets/roti.jpg'

export const Recipes = () => {
  const[recipes,setRecipes]=useState([]);

  useEffect(()=>{
    fetchRecipes();
  },[])

  const fetchRecipes = async()=>{
    try{
      const response=await fetch('http://localhost:4000/recipes');
      const data = await response.json();
      setRecipes(data);
    }
    catch(err)
    {
      console.error(err);
    }
  }
  const addtoFavourites=async(id)=>{
    try{
      const response=await fetch('http://localhost:4000/addtofavourites',{ 
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({id}),	
       });
       const data = await response.json();
       if(data.success){
         alert("Added to Favourites");
       }
       else{
         alert("Failed to add");
       }
    }
    catch(err)
    {
      console.error(err);
      alert("Something went wrong.Please try again");
    }
  }
  return (
    <div className="recipes-list">
      <div className="recipes-list-images">
        {recipes.slice(0,5).map((recipe,index)=>(
          <img key={recipe.id} src={recipe.image  || (index===0?soup:index===1?Pizza:index===2?noodles:index===3?nasigoreng:roti)} alt={recipe.name} />
        ))}
      </div>
      <div className="recipes-list-dis">
        {recipes.slice(0,5).map((recipe)=>(
          <div key={recipe.id}>
            <hr/>
            <br/>
            <h1>{recipe.name}</h1>
            <br/>
            <ul>
              <li>Ingredients and Preparation</li>
            </ul>
            
            <p>{recipe.instructions}</p>
            <br/>
            <br/>
            <button onClick={()=>addtoFavourites(recipe.id)}>Add To Favourite</button>
            <br/>
            <br/>
            <hr/>
            
            </div>
        ))}
      </div>
    </div>
    
  )
}