import "./App.css";
import SiteBar from "./Components/SiteBar";
import {
  BackGroundColor,
  HomeBackground,
} from "./StyledComponents/background.styled";
import { BrowserRouter as Router} from "react-router-dom";
import SwitchComponent from "./Components/SwitchComponenet";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App">
      
        {/* <HomeBackground> */}
          <SiteBar />
          <Router>
          <SwitchComponent />
          </Router>
          <Footer />
        {/* </HomeBackground> */}
      
    </div>
  );
}

export default App;
