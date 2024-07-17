import ChiefCard from "./chiefCard";
import img1 from "../Assets/img_1.jpg";
import img2 from "../Assets/img_2.jpg";
import img3 from "../Assets/img_3.jpg";
import img4 from "../Assets/img_4.jpg";
import img5 from "../Assets/img_5.jpg";
import img6 from "../Assets/img_6.jpg";
import img7 from "../Assets/img_7.jpg";
import img8 from "../Assets/img_8.jpg";
import { useState, useEffect } from "react";


export default function ChiefsSection(){
  const chiefs = [
      {
          name: "Juan Carlos",
          img: img1,
          recipesCount: "10",
          cuisine: "Mexican",
      },
      {
          name: "John Doe",
          img: img2,
          recipesCount: "05",
          cuisine: "Japanese",
      },
      {
          name: "Erich Maria",
          img: img3,
          recipesCount: "13",
          cuisine: "Italian",
      },
      {
          name: "Chris Brown",
          img: img4,
          recipesCount: "08",
          cuisine: "American"
      },
      {
          name: "Blake Lively",
          img: img5,
          recipesCount: "09",
          cuisine: "French"
      },
      {
          name: "Ben Affleck",
          img: img6,
          recipesCount: "04",
          cuisine: "Indian"
      },
       {
          name: "Jenson Ackles",
          img: img7,
          recipesCount: "04",
          cuisine: "Hawaiian"
      },
      {
          name: "Patrick Park",
          img: img8,
          recipesCount: "04",
          cuisine: "Korean"
      },
      
  ]

  const [chief, setChief] = useState([]);

  const getChiefs = async () => {
    try {
      const response = await fetch("/users/user/profile");
      const data = await response.json();
      setChief(data);
      console.log("Chief data:", data);
    } catch (error) {
        console.error("Error fetching chief data:", error);
    }
  };

  useEffect(() => {
    getChiefs();
  }, []);


  return (
      <div className="section chiefs">
          <h1 className="title">Our Top Chiefs</h1>
          <div className="top-chiefs-container">
              {/* <ChiefCard />
              <ChiefCard />
              <ChiefCard />
              <ChiefCard />
              <ChiefCard />
              <ChiefCard /> */}
              {/* { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) } */}
              {chief.map((chief) => (
                <ChiefCard key={chief.username} chief={chief} />
              ))}
          </div>
      </div>
  )
}