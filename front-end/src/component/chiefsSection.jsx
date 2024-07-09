import ChiefCard from "./chiefCard";
import img1 from "../Assets/img_1.jpg";
import img2 from "../Assets/img_2.jpg";
import img3 from "../Assets/img_3.jpg";
import img4 from "../Assets/img_4.jpg";
import img5 from "../Assets/img_5.jpg";
import img6 from "../Assets/img_6.jpg";

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
      }
  ]
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
              { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
          </div>
      </div>
  )
}