import CustomImage from "./customImage";
import { BiSolidLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { HiSave } from "react-icons/hi";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; 
import { useNavigate } from 'react-router-dom';


export default function AllMyRecipes({recipe, userId}){
    
    const navigate = useNavigate();

    const handleEditMyRecipe = () => {
        navigate(`/my_recipes/edit/${recipe.recipe_id}`);
    };

 
    const handleRemoveMyRecipe = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch (`/my_recipes/${recipe.recipe_id}/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({recipe})
            });
            if (response.ok) {
                navigate(0);
            }
            } catch (error) {
                console.error('There was an error removing the recipe!', error);
        }

    };

    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.img}/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.profile_pic} alt=""/>
               
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.description}</p>
                <div className="like-comment ">
                <FaEdit onClick={handleEditMyRecipe} recipe={recipe}/>   
                <FaTrashAlt style={{ margin: '0px' }} onClick={handleRemoveMyRecipe}/> 
                </div>
            </div>
        </div>
    )
}