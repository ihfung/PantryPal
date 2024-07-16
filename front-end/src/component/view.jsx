import React, { useState, useEffect } from 'react';
import '../style/view_recipes.scss';
import { LuSend } from "react-icons/lu";


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

  useEffect(() => {
   
    fetchComments();
  },  [form.comments  ]);

 
  const fetchComments = async () => {
    try {
      const response = await fetch(`/comments?recipeId=${props.recipe.recipe_id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      
      setForm((prevForm) => ({ ...prevForm, comments: data }));
    } catch (error) {
      console.error('Error fetching comments:', error);
      
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.userId);
    try {
    const response = await fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: form.comment,
        recipeId: props.recipe.recipe_id,
        ownerId: props.userId, 
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add comment');
    }

    const result = await response.json();
    console.log('Comment added:', result);
    fetchComments();
    setForm({ ...form, comment: '' });
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};

  return (
    <div className="recipe-forms">
      <h1>View Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-rows">
          <div className="form-groups">
            <label>Image</label>
            <img src={props.recipe.img} alt="Recipe" />
          </div>
          <div className="form-fields">
            <div className="form-groups">
              <label>Title</label>
              <input type="text" name="title" value={form.title} onChange={handleInputChange} />
            </div>
            <div className="form-groups">
              <label>Ingredients</label>
              <textarea type="text" name="ingredients" value={form.ingredients} onChange={handleInputChange}></textarea>
            </div>
            <div className="form-groups">
              <label>Description</label>
              <textarea name="description" value={form.description} onChange={handleInputChange}></textarea>
            </div>
          </div> 
        </div>
        <div className="form-groups">
          <label>Directions</label>
          <textarea name="directions" value={form.directions} onChange={handleInputChange}></textarea>
        </div>
        <div className="comments-sections">
          <div className="form-groups">
            <label>Add comments</label>
            <div className="input-box">
              <input type="text" name="comment" value={form.comment} onChange={handleInputChange} placeholder="Add a comment" />
              <button type="submit">
                <LuSend className='icon' />
              </button>
            </div>
          </div>
          {form.comments.map((comment, index) => (
            <div key={index} className="comments">
              <p>{comment.comment_text}</p>
            </div>
          ))}
            {/* <div className="form-group">
            <label>Comments</label>
            <textarea name="comments" value={form.comments.map(c => c.comment_text).join('\n')} readOnly></textarea>
          </div> */}
        </div>
      </form>
    </div>
  );
}
