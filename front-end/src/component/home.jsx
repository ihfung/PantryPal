import {useState} from "react";
import NavBar from "./navbar";
import { GiHamburgerMenu } from "react-icons/gi";


const Home = () =>{
  const [showNav, setShowNav] = useState(false)
  return (
    <div>
   
    <div className="content">
      <header>
      <GiHamburgerMenu  onClick={() => setShowNav(!showNav)}/>
      </header>
       <NavBar show ={showNav} /> 
    </div>
  </div>
  );
}

export default Home;