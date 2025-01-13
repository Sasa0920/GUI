import React from 'react'
import './Recipes.css'
import soup from '../Assets/soup.jpg'
import Pizza from '../Assets/Pizza.jpg'
import noodles from '../Assets/noodles.jpg'
import nasigoreng from '../Assets/nasigoreng.jpg'
import roti from '../Assets/roti.jpg'

export const Recipes = () => {
  return (
    <div className="recipes-list">
      <div className="recipes-list-images">
        <img src={soup}alt="" />
        <img src={Pizza}alt="" />
        <img src={noodles} alt="" />
        <img src={nasigoreng} alt="" />
        <img src={roti} alt="" />
      </div>
      <div className="recipes-list-dis">
        <hr/>
        <br/>
        <h1>Vegetable Soup</h1>
        <br/>
        
        <ul>
          <li>Preparation Time : 30 minutes</li>
          <br/>
          <li>Ingredients and Preparation :</li>
        </ul>  
        <p>To make a hearty vegetable soup, onion, garlic, carrots, celery, potatoes, zucchini, green beans, tomatoes, broth, herbs, and bay leaf in olive oil. Season with salt and pepper. Bring to a boil, then simmer until tender. Add shredded cabbage, corn kernels, or bell pepper for flavor. Garnish with fresh herbs and serve hot with crusty bread.</p>
        <br/>
        
        <button>Add To Favourites</button>
        <button>Delete Recipe</button>
        <hr/>
        <hr/>
        <br/>
        <h1>Tomato Pizza</h1>
        <br/>
        
        <ul>
          <li>Preparation Time : 1 hour</li>
          <br/>
          <li>Ingredients and Preparation :</li>
        </ul>  
        <p>To make a delicious tomato pizza, gather ingredients like pizza dough, tomato sauce, shredded mozzarella cheese, thinly sliced tomatoes, olive oil, oregano, basil, salt, pepper, and fresh basil leaves. Preheat oven to 475°F, roll dough, spread sauce, sprinkle cheese, arrange tomatoes, drizzle olive oil, season with oregano, basil, salt, and pepper. Bake for 10-15 minutes until golden and cheese is bubbly. Garnish with basil leaves.</p>
        <br/>
        
        <button>Add To Favourites</button>
        <button>Delete Recipe</button>
        <hr/>
        <hr/>
        <br/>
        <h1>Cheesy Noodles</h1>
        <br/>
        
        <ul>
          <li>Preparation Time : 25 minutes</li>
          <br/>
          <li>Ingredients and Preparation :</li>
        </ul>  
        <p>To make cheese noodles, combine 200 grams of noodles, butter, flour, milk, shredded cheddar, grated Parmesan cheese, salt, pepper, and nutmeg. Cook noodles until al dente, drain, and set aside. Melt butter, flour, milk, and cheese in a saucepan. Cook until thickened, then add shredded cheddar and Parmesan cheese. Season with salt, pepper, and nutmeg. Toss noodles with cheese sauce, serve hot. Enjoy the creamy, cheesy noodles.</p>
        <br/>
        
        <button >Add To Favourites</button>
        <button >Delete Recipe</button>
        
        <hr/>
        <hr/>
        <br/>
        <h1>Nasi Goreng</h1>
        <br/>
        
        <ul>
          <li>Preparation Time : 50 minutes</li>
          <br/>
          <li>Ingredients and Preparation :</li>
        </ul>  
        <p>To make a delicious Nasi Goreng, combine rice, vegetable oil, onion, garlic, shrimp paste, chicken, eggs, soy sauce, sweet soy sauce, chili paste, mixed vegetables, salt, pepper, and green onions. Heat oil and sauté onions, garlic, chicken, tofu, eggs, rice, soy sauce, sweet soy sauce, and chili paste. Cook vegetables and season with salt and pepper. Serve hot, garnished with green onions and fried shallots. Enjoy your flavorful Nasi Goreng!</p>
        <br/>
        
        <button >Add To Favourites</button>
        <button >Delete Recipe</button>
        
        <hr/>
        <hr/>
        <br/>
        <h1>Roti</h1>
        <br/>
        
        <ul>
          <li>Preparation Time : 40 minutes</li>
          <br/>
          <li>Ingredients and Preparation :</li>
        </ul>  
        <p>To make a soft and delicious roti, combine whole wheat flour, salt, oil, and warm water. Knead for 8-10 minutes, then let rest for 30 minutes. Divide dough into balls and roll into discs. Heat a tawa or griddle, cook rotis for 1-2 minutes on each side until golden brown. Brush with oil or ghee for extra flavor. Enjoy with your favorite curry or side dish.</p>
        <br/>
        
        <button>Add To Favourites</button>
        <button>Delete Recipe</button>
        <hr/>
      </div>
    </div>
    
  )
}
