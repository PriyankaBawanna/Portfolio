import About from "./About";
import "../CSS/Skills.css";
import { Outlet } from "react-router";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    document.title = "Skills";
  }, []);
  return (
    <>
      <p> JavaScript </p>
    </>
  );
}
