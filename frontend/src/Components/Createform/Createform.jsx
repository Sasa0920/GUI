import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Createform.css'

export const Createform = () => {
  const[formData, setFormData] = useState({
    name: '',
    image:null,
    ingredients:'',
    instructions: ''
  })
  const navigate=useNavigate();

  const handleChange = (e) => {
    const{name,value} = e.target;
    setFormData(prevState=>({
      ...prevState,
      [name]:value
    }))
  }
  const handleImage = async (e) => {
    const file = e.target.files[0];
   
    const formData = new FormData();
    formData.append('product', file);
  
    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setFormData((prevState) => ({
          ...prevState,
          image: data.image_url, 
        }));
        alert('Image uploaded successfully!');
      } else {
        alert('Image upload failed.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong during image upload.');
    }
    };

const handleSubmit = async(e) => {
  e.preventDefault();
  if (!formData.name || !formData.image || !formData.ingredients || !formData.instructions) {
    alert('All fields are required!');
    return;
  }

  const payload = { ...formData };

  
  try{
    const response  = await fetch('http://localhost:4000/addrecipe',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const data = await response.json();
    if(data.success){
      alert('Recipe Created Successfully');
      navigate('/recipes');
    }
    else{
      alert('Failed to Create Recipe');
    }
  }
  catch(err){
    console.log(err);
    alert('Something went wrong.Please try again');
  }
}
  return (
    <div className='form'>
      <div className="form-container">
        <form onSubmit = {handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Recipe Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label htmlFor="image">Recipe Image</label>
            <input type="file" id="image" name="image" onChange={handleImage} accept="image/*" required/>
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea id="ingredients" name="ingredients" rows="5" value={formData.ingredients} onChange={handleChange} required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="instructions">Instructions</label>
            <textarea id="instructions" name="instructions" rows="5" value={formData.instructions} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Create Recipe</button>
        </form>
      </div>
    </div>
  )
}
