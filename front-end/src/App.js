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
import Categories from './pages/categories';
import EditRecipe from './pages/editRecipe';
import { GiHamburgerMenu } from "react-icons/gi";

axios.defaults.baseURL = 'http://localhost:3000';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [showNav, setShowNav] = useState(false);
  
  

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(parseInt(storedUserId));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    setUserId(user.id);
    setIsLoggedIn(true);
    localStorage.setItem('userId', user.id.toString());
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
        <Route path="/recipes" element={<Recipes userId={userId} />} />
        <Route path="/add_recipes" element={<AddRecipes />} />
        <Route path="/my_recipes" element={<MyRecipes userId={userId} />}/>
        <Route path="/my_recipes/edit/:id" element={<EditRecipe userId={userId} />} />
        <Route path="/saved_recipes" element={<SavedRecipes />} />
        <Route path="/categories/:categoryName" element={<Categories userId={userId}/>}/>
        <Route path="/login"element={<LoginForm onLogin={handleLogin} />}
        />
        <Route path="/register" element={<RegisterForm />} />
       
      </Routes>
    </Router>
  );
};

export default App;

