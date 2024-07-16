import { useState } from "react";
import CustomImage from "./customImage";
import { BiSolidLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { HiSave } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Saved({ recipe }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleRemoveSaveRecipe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/save/${recipe.recipe_id}/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipe })
      });
   
      if (response.ok) {
        navigate(0);
      } else {
        setError('Failed to remove recipe!');
        console.error('Failed to remove recipe!');
      }
    } catch (error) {
        
        setError('There was an error removing the recipe!');
        console.error('There was an error removing the recipe!', error);
    }
  };


return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.img}/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.profile_pic} alt=""/>
                <div className="save-icon">
                   <Link onClick={handleRemoveSaveRecipe}><HiSave /></Link>
                </div>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.description}</p>
                <Link className="view-btn" to={`/recipes/${recipe.recipe_id}`}>VIEW RECIPE</Link>
                <div className="like-comment ">
                <BiSolidLike />
                <FaRegComment />
                </div>
            </div>
        </div>
    )
}