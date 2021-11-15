import Login from "./Register/Login";
import "./App.css";
import Register from "./Register/Register";
import SiteBar from "./Components/SiteBar";
import {
  BackGroundColor,
  HomeBackground,
} from "./StyledComponents/background.styled";
import styled from "styled-components";
import { SiteText, HeaderText } from "./StyledComponents/text.style";
import Merch from "./Components/Merch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Post from "./Components/Post";
import Home from "./Components/Home";

import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="App">
      <BackGroundColor>
        <HomeBackground>
          <SiteBar />
          {/* <NavBar /> */}
        </HomeBackground>
      </BackGroundColor>
    </div>
  );
}

export default App;
