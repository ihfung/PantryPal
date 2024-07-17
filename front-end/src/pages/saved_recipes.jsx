import {useState, useEffect} from "react";

import '../style/navbar.scss';
import '../style/footer.scss';
import '../style/navbar.scss';
import '../style/footer.scss';
import '../style/my_recipes.scss';

import Footer from "../component/footer";

import Saved from "../component/saved";


const SavedRecipes = (props) => {
 
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  
  
  const fetchSaveRecipes = async () => {
  
  try {
    const response = await fetch('/save/save_recipe', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();
   
    
    if (response.ok) {
      setRecipes(data);
      console.log('Save recipe successful');
    } else {
      
      console.error('Save recipe failed:', data.error);
     
    }
  } catch (error) {
    console.error('Error saving recipe:', error);
    setError('Save recipe failed: ' + error.message );
  }
}
  
 useEffect(() => {
        fetchSaveRecipes(); // Fetch all recipes initially
  }, []);

  return (

    <div className="content">
   
      <div className="main">
      <h1 className="header">Saved</h1>
      <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <Saved key={index} recipe={recipe} />
                ))}
     </div>
      </div>
      <Footer />
    </div>
  
  );
}

export default SavedRecipes;