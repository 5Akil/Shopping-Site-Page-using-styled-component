import React from "react";
import {
  Container,
  Mainbody,
} from "./Components/Styled-Components/Globel.styled";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner.js";
import Particles from "./Components/Particles.js";

function App() {
  return (
    <Mainbody>
      
        <Navbar />
        <Banner />
        <Particles/>
      
    </Mainbody>
  );
}

export default App;
