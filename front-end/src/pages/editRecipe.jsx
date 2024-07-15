import {useState, useEffect} from "react";
import NavBar from "../component/navbar";
import '../style/navbar.scss';
import '../style/home.scss';
import '../style/footer.scss';
import '../style/edit_main_recipe.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../component/footer";
import Edit from "../component/editRecipeCard";
import { useParams } from "react-router-dom";

const EditRecipe = () => {
  
  const [showNav, setShowNav] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const params = useParams()
  const recipe_id = params.id

  useEffect( () => {
    fetch(`/my_recipes/edit/${recipe_id}`)
    .then(res => res.json())
    .then(recipe => setRecipe(recipe))
  },[]);
  

  return (

    <div className="content">
    
      <div className="main-add">
      
      {recipe && <Edit recipe={recipe}/>}
     
      </div>
      <Footer />
    </div>
  
  );
}

export default EditRecipe;