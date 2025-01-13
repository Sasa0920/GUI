import React from 'react'
import './Createform.css'

export const Createform = () => {
  return (
    <div className='form'>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Recipe Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea id="ingredients" name="ingredients" rows="5"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="instructions">Instructions</label>
            <textarea id="instructions" name="instructions" rows="5"></textarea>
          </div>
          <button type="submit">Create Recipe</button>
        </form>
      </div>
    </div>
  )
}
