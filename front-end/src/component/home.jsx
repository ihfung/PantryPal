import {useState} from "react";
import NavBar from "./navbar";
import ImproveSkill from "./improveskills";
import QouteSection from "./qoutesection";
import '../style/navbar.scss';
import '../style/home.scss';
import '../style/footer.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import Summery from "./summery";
import ChiefsSection from "./chiefsSection";
import Footer from "./footer";




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
       <ChiefsSection />
      </div>
      <Footer />
    </div>
  
  );
}

export default Home;


