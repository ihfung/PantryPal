import {useState, useEffect} from "react";
import NavBar from "../component/navbar";
import '../style/navbar.scss';
import '../style/home.scss';
import '../style/footer.scss';
import '../style/add_recipes.scss';
import '../style/view_recipes.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../component/footer";
import View from "../component/view";
import { useParams } from "react-router-dom";

const ViewRecipes = () =>{
  
  const [showNav, setShowNav] = useState(false)
  const [recipe, setRecipe] = useState(null)
  const params = useParams()
  const recipe_id = params.id
  useEffect( () => {
    fetch(`/recipes/${recipe_id}`)
    .then(res => res.json())
    .then(recipe => setRecipe(recipe.recipe))

  },[])

  return (

    <div className="content">
     
      
      <div className="main-add">
      {recipe && <View recipe ={recipe}/> }
      </div>
      <Footer />
    </div>
  
  );
}

export default ViewRecipes;