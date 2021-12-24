import { useState } from "react";
import "../CSS/HomePage.css";
import HomePageforLink from "./HomePage";

export default function Home() {
  const [name, setName] = useState("Priyanka Bawanna .");
  return (
    <div className="HomeTitle">
      <HomePageforLink />
      <div className="welcome">WELCOME TO MY WORLD</div>
      <div className="intro">
        <h1>Hi, I’m {name}</h1>
        <h1>Software Engineer. </h1>
        <h1>based in India.</h1>
        
      </div>
    </div>
  );
}
