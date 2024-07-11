import {useState} from "react";
import NavBar from "../component/navbar";
import ImproveSkill from "../component/improveskills";
import QouteSection from "../component/qoutesection";
import '../style/navbar.scss';
import '../style/home.scss';
import '../style/footer.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import Summery from "../component/summery";
import ChiefsSection from "../component/chiefsSection";
import Footer from "../component/footer";


const Home = () =>{
  const [showNav, setShowNav] = useState(false)
  return (

    <div className="content">
      
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


