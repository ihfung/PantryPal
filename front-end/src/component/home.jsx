import {useState} from "react";
import NavBar from "./navbar";
import ImproveSkill from "./improveskills";
import QouteSection from "./qoutesection";
import '../style/navbar.scss';
import '../style/home.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import Summery from "./summery";



const Home = () =>{
  const [showNav, setShowNav] = useState(false)
  return (

    <div className="content">
      <header>
        <GiHamburgerMenu  onClick={() => setShowNav(!showNav)}/>
        <a href ="#!" className="logo" >Pantry<span>Pal</span></a>
      </header>
      <NavBar show ={showNav} /> 
      <div className="main">
       <Summery />
       <ImproveSkill/>
       <QouteSection />
      </div>
    </div>
  
  );
}

export default Home;


