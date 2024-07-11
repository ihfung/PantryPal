import React from "react";
import '../style/navbar.scss';
import cooklogo from '../Assets/cook.png';
import { useNavigate } from 'react-router-dom';


const NavBar = ({show, isLoggedIn, onLogout }) =>{
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };
  return (
    
   <div className={show ? "sidenav active" : "sidenav"}>
    
    <img src ={cooklogo} alt = 'logo' className="logo"/>
    <ul>
        <li><a href="/">Home</a></li>
        {isLoggedIn ? (
          <>
            <li><a href="#!">Profile</a></li>
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/my_recipes">My Recipes</a></li>
            <li><a href="/add_recipes">Add Recipe</a></li>
            <li><a href="/saved_recipes">Saved</a></li>
            <li><a href="#!">Categries</a></li>
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