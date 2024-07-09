import {useState} from "react";
import '../style/home.scss';
import CustomImage from "./customImage";
// Import your images
import cookImage1 from '../Assets/background1.jpg';
import cookImage2 from '../Assets/background1.jpg';
import cookImage3 from '../Assets/background1.jpg';
import cookImage4 from '../Assets/background1.jpg';
import cookImage5 from '../Assets/background1.jpg';
import cookImage6 from '../Assets/background1.jpg';
import cookImage7 from '../Assets/background1.jpg';
import cookImage8 from '../Assets/background1.jpg';
import cookImage9 from '../Assets/background1.jpg';



export default function Summery(){
  
  const images = [
    cookImage1,
    cookImage2,
    cookImage3,
    cookImage4,
    cookImage5,
    cookImage6,
    cookImage7,
    cookImage8,
    cookImage9
  ];
  
      return (
        <div className="section hero">
        <div className="col typograpy">
          <h1 className="title">What Are We About</h1>
          <p className="info">"PantryPal is your ultimate culinary companion, designed to delight both your taste buds and kitchen adventures. It's a vibrant platform where food enthusiasts of all levels can explore a treasure trove of delicious recipes and culinary inspirations from around the world. Whether you're a seasoned chef looking to innovate or a novice eager to learn, PantryPal offers a seamless experience to discover, create, and share delightful dishes. With its user-friendly interface and comprehensive recipe database, PantryPal empowers you to elevate your cooking skills, explore new flavors, and embark on a flavorful journey that's as rewarding as it is delicious."So start exporing now</p>
          <button className="btn">EXPLORE NOW</button>
        </div>
        <div className="col gallery">
        {images.map((src, index) => (
            <CustomImage key={index} src={src} pt={"60%"} />
          ))}
        </div> 
        </div>
    )
}