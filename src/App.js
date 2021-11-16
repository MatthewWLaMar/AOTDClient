import "./App.css";
import SiteBar from "./Components/SiteBar";
import {
  BackGroundColor,
  HomeBackground,
} from "./StyledComponents/background.styled";
import { BrowserRouter as Router} from "react-router-dom";
import SwitchComponent from "./Components/SwitchComponenet";



function App() {
  return (
    <div className="App">
      <BackGroundColor>
        <HomeBackground>
          <SiteBar />
          <Router>
          <SwitchComponent />
          </Router>
        </HomeBackground>
      </BackGroundColor>
    </div>
  );
}

export default App;
