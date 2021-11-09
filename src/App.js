import Login from './Register/Login';
import './App.css';
import Register from './Register/Register';
import PostCreate from './Components/PostCreate';
import PostIndex from './Components/PostIndex';
import PostCards from './Components/PostCards';


function App() {
  return (
    <div className="App">
    <p> welcome to Army of the Dead! </p>

      <Register />  
       <Login />
      <PostCreate />
      <PostIndex/>
      <PostCards/>

    </div>
  );
}

export default App;
