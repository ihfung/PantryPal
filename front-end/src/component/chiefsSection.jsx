import ChiefCard from "./chiefCard";
import { useState, useEffect } from "react";


export default function ChiefsSection(){
 
  const [chief, setChief] = useState([]);

  const getChiefs = async () => {
    try {
      const response = await fetch("/users/user/profile");
      const data = await response.json();
      setChief(data);
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