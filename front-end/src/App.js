import {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './component/navbar';
import LoginForm from './component/login';
import RegisterForm from './component/register';
import Home from './pages/home';
import Recipes from './pages/recipes';
import AddRecipes from './pages/add_recipes';
import SavedRecipes from './pages/saved_recipes';
import MyRecipes from './pages/my_recipes';
import ViewRecipes from './pages/view_recipe';
import { GiHamburgerMenu } from "react-icons/gi";

axios.defaults.baseURL = 'http://localhost:3000';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [showNav, setShowNav] = useState(false);
  

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
   console.log("login as user");
    setUserId(user.id);
    console.log(user.id, "user.id inside handlelogin",user, "user is from app"); 
    
    setIsLoggedIn(true);
   localStorage.setItem('userId', user.id); 
  };
  const handleLogout = () => {
    setUserId(null);
    setIsLoggedIn(false);
    localStorage.removeItem('userId');
  };
  return (
    <Router>
        <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        <a href="/" className="logo"> Pantry<span>Pal</span>
        </a>
      </header>
      <NavBar show={showNav} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/recipes/:id" element={<ViewRecipes />} />
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/add_recipes" element={<AddRecipes />} />
        <Route path="/my_recipes" element={<MyRecipes userId={userId} />}/>
        <Route path="/saved_recipes" element={<SavedRecipes />} />
        <Route path="/login"element={<LoginForm onLogin={handleLogin} />}
        />
        <Route path="/register" element={<RegisterForm />} />
       
      </Routes>
    </Router>
  );
};

export default App;

