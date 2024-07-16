import React, { useState } from 'react';
import '../style/edit_recipe.scss';
import { useNavigate } from "react-router-dom";


export default function EditingRecipe(props) {
  
  const [form, setForm] = useState({
    title: props.recipe.title,
    ingredients: props.recipe.ingredients,
    directions: props.recipe.directions,
    description: props.recipe.description,
    image: props.recipe.img,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try{
      const response = await fetch(`/my_recipes/edit/${props.recipe.recipe_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(form),
        });
        
        if (response.ok) {
          navigate(`/my_recipes`);
          console.log('Edit recipe successful');
          
        } else {
          console.error('Edit recipe failed:', form.error);
        }
      } catch (error) {
        console.error('Error editing recipe:', error);
    }

  };

  return (
    <div className="recipe-form">
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <br></br>
            <img src={props.recipe.img} alt="Recipe" />
          </div>
          <div className="form-field">
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={form.title} onChange={handleInputChange} />
          </div>
        
        <div className="form-group">
          <label>Ingredients</label>
           <textarea type="text" name="ingredients" value={form.ingredients} onChange={handleInputChange}></textarea>
        </div>
        </div>
        
        </div>
        <div className="form-group">
          <label>Directions</label>
          <textarea type="text" name="directions" value={form.directions} onChange={handleInputChange}></textarea>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleInputChange}></textarea>
        </div>

        <div className="form-group">
         <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleInputChange}
          />
          {form.image && (
            <img
              src={form.image}
              alt="Recipe"
              className="image-preview"
            />
          )}
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
