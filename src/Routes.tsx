import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import App from "./App";
import Contact from "./Contact";
import Profile from "./Profile";
import Protfolio from "./Protfolio";
import Skills from "../src/Skills";
const RoutesPath = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/About" element={<About />}>
            {/*      <Route path="Skills" element={<Skills />} />*/}
          </Route>

          {/* <Route path="Profile" element={<Profile />} />*/}
          <Route path="Protfolio" element={<Protfolio />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RoutesPath;
