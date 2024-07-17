import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../style/navbar.scss';
import '../style/home.scss';
import '../style/footer.scss';
import Footer from "../component/footer";
import RecipeCard from "../component/recipeCard";



const Categories = ({ userId }) =>{
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [categoriesName, setCategoriesName] = useState();


  useEffect(() => {
    fetchCategoryData();
   
  }, [categoryName]);

  const fetchCategoryData = async () => {
    try {
      const response = await fetch(`/recipes/category?category=${categoryName}`);
      const data = await response.json();
      setRecipes(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  const fetchCategoryName = async () => {
    try {
      const response = await fetch(`/recipes/categories/${categoryName}`);
      const data = await response.json();
      setCategoriesName(data);
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  useEffect(() => {
    fetchCategoryName();
  }, [categoriesName]);

  return (

    <div className="content">
      
      <div className="main">
      <h1>{categoriesName && categoriesName.map((category) => (category.category_name))}</h1>
        <div className="recipes-container">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} userId={userId} />
          ))}
        </div>  
      </div>
      <Footer />
    </div>
  
  );
}

export default Categories;