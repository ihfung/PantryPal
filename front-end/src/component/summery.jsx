import { useState, useEffect } from "react";
import '../style/home.scss';

export default function Summery() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="section hero">

      <div className="col typograpy">
        <h1 className="title">What Are We About</h1>
        <p className="info">"PantryPal is your ultimate culinary companion, designed to delight both your taste buds and kitchen adventures. It's a vibrant platform where food enthusiasts of all levels can explore a treasure trove of delicious recipes and culinary inspirations from around the world. Whether you're a seasoned chef looking to innovate or a novice eager to learn, PantryPal offers a seamless experience to discover, create, and share delightful dishes. With its user-friendly interface and comprehensive recipe database, PantryPal empowers you to elevate your cooking skills, explore new flavors, and embark on a flavorful journey that's as rewarding as it is delicious."So start exporing now</p>
        <button className="btn">EXPLORE NOW</button>
      </div>
      <div className="col gallery">
        {recipes.map((recipe, index) => (
          <img key={index} src={recipe.img} alt={`Image ${index}`} />
        ))}
      </div>

    </div>
  )
}