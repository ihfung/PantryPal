import {useState, useEffect} from "react";
import NavBar from "../component/navbar";
import '../style/navbar.scss';
import '../style/footer.scss';
import '../style/navbar.scss';
import '../style/footer.scss';
import '../style/my_recipes.scss';

import Footer from "../component/footer";

import AllMyRecipes from "../component/myallrecipes";



const MyRecipes = ({recipe, userId}) =>{
  const [showNav, setShowNav] = useState(false)
  const [recipes, setRecipes] = useState([]);
  
  const fetchMyRecipes = async () => {
   
    try {
      
      const endpoint = `/my_recipes`;
      const response = await fetch(endpoint);
      if (response.ok) {
        
        const data = await response.json();
        
        setRecipes(data);
      } else {
        console.error('Failed to fetch recipes:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error.message);
    }
  }
  
  useEffect(() => {
    fetchMyRecipes();
  });

  return (

    <div className="content">
      
      <div className="main">
      {/* <h1>My Recipes</h1> */}
      <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <AllMyRecipes key={index} recipe={recipe} userId={userId}/>
                ))}
     </div>
      </div>
      <Footer />
    </div>
  
  );
}

export default MyRecipes;