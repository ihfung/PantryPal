import React from "react";
import '../style/navbar.scss';
import cooklogo from '../Assets/cook.png';


const NavBar = ({show, isLoggedIn }) =>{
  return (
    
   <div className={show ? "sidenav active" : "sidenav"}>
    
    <img src ={cooklogo} alt = 'logo' className="logo"/>
    <ul>
        <li><a href="/">Home</a></li>
        {isLoggedIn ? (
          <>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/my-recipes">My Recipes</a></li>
            <li><a href="/add-recipe">Add Recipe</a></li>
            <li><a href="/saved">Saved</a></li>
            <li><a href="/update-profile">Categries</a></li>
            <li><a href="/logout">Logout</a></li>
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