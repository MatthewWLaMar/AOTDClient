import Login from './Register/Login';
import './App.css';
import Register from './Register/Register';
import SiteBar from './Components/SiteBar';


function App() {
  return (
    <div className="App">
    <p> welcome to Army of the Dead! </p>
      <SiteBar />
    
      <Register />  
       <Login />
      {/* <PostCreate />
      <PostIndex/> */}
      

    </div>
  );
}

export default App;
