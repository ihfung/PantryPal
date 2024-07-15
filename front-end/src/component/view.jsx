import React, { useState } from 'react';
import '../style/view_recipes.scss';
import backgroundImg from '../Assets/background1.jpg'; 

export default function View(props) {
  const [form, setForm] = useState({
    title: props.recipe.title,
    ingredients: props.recipe.ingredients,
    directions: props.recipe.directions,
    description: props.recipe.description,
    comment: '',
    comments: [],
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, comments: [...form.comments, form.comment], comment: '' });
    // handle other form submission logic here
  };

  return (
    <div className="recipe-form">
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Image</label>
            <img src={props.recipe.img} alt="Recipe" />
          </div>
          <div className="form-field">
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={form.title} onChange={handleInputChange} />
          </div>
        
        <div className="form-group">
          <label>Ingredients</label>
          <input type="text" name="ingredients" value={form.ingredients} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Directions</label>
          <input type="text" name="directions" value={form.directions} onChange={handleInputChange} />
        </div>
        </div>
        
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleInputChange}></textarea>
        </div>
      </form>
      <div className="comments-section">
        <div className="form-group">
          <label>Add comments</label>
          <input type="text" name="comment" value={form.comment} onChange={handleInputChange} />
        </div>
        {form.comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
