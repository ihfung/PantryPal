import {useState} from "react";
import NavBar from "../component/navbar";
import '../style/navbar.scss';
import '../style/home.scss';
import '../style/footer.scss';
import '../style/add_recipes.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../component/footer";
import Form from "../component/form";


const AddRecipes = () =>{
  
  const [showNav, setShowNav] = useState(false)
  return (

    <div className="content">
    
      <div className="main-add">
      <Form />
      </div>
      <Footer />
    </div>
  
  );
}

export default AddRecipes;