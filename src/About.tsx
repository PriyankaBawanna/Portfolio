import HomePageforLink from "./HomePage";
import "../CSS/HomePage.css";
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
  console.log("About");

  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <HomePageforLink />
      <div className="aboutMe">
        <div className="about">
          <h1>About Me</h1>
        </div>
        <div className="Discription">
          I'm frontend developer by profession and working with Vidhya Skill
          School , where I learnt the basics of development of Web based
          application. My major skills include HTML,CSS ,JavaScript, React JS.
        </div>
        <div className="skills">
          <h1>skills</h1>
          <ul>HTML</ul>
          <ul>CSS</ul>
          <ul>JavaScript</ul>
          <ul>React JS</ul>
          <ul>Redux </ul>
        </div>
      </div>

      {/*<Link to="/About/Skills">Skills</Link>*/}
    </>
  );
}
