import React, { useState, useEffect } from "react";
import '../style/navbar.scss';
import cooklogo from '../Assets/cook.png';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";

const NavBar = ({ show, isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [username, setUsername] = useState([]);
  
  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };


  useEffect(() => {

    async function fetchCategories() {
      try {
        const response = await fetch('/recipes/categories'); 
        const data = await response.json();
     //   console.log("fetch categories",data);
        setCategories(data);
        
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);

  const toggleSubCategories = () => {
    setShowSubCategories(!showSubCategories);
  };

  const [getUsername, setgetUsername] = useState();
  const handleUserName = async () => {
    try {
      const response = await fetch('/users');
      const data = await response.json();
      setgetUsername(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }

  };

  useEffect(() => {
    handleUserName();
  }, [getUsername]);
  

  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <img src={cooklogo} alt='logo' className="logo" />
      
      <ul>
        
        <li><a href="/">Home</a></li>
        {isLoggedIn ? (
          <>
             <li><a href="#!">Profile - {getUsername && getUsername.username}</a></li>
            {/* <li><a href="#!">Profile</a></li> */}
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/my_recipes">My Recipes</a></li>
            <li><a href="/add_recipes">Add Recipe</a></li>
            <li><a href="/saved_recipes">Saved</a></li>
            <li>
              <a href="#!" onClick={toggleSubCategories}>Categories <span className="icon"><FaChevronDown /></span></a>
              {showSubCategories && (
                <ul className="subcategories">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href={`/categories/${category.category_id}`}>
                        {category.category_name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><a href="/" onClick={handleLogoutClick}>Logout</a></li>
          </>
        ) : (
          <>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
