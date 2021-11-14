import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Middle from "./Middle.js";
import Navbar from "./Navbar.js";
import Blue from "./Blue.js";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container" id="container" style={{flexDirection:"column",marginTop:"4%"}}>
        <h1>Home of  <strong style={{color:"indigo"}}>100,00+</strong> <br/> books and podcasts</h1>
          <p style={{margin:"3%",color:"grey"}}>Get the latest books and listen to <br/> the latest podcasts all in one place</p>
          <button type="button" class="btn btn-primary btn-lg" style={{margin:"2%",backgroundColor:"darkBlue"}}>Get Started</button>
      </div>
      <Middle />
      <Blue/>
    </div>
  );
}

export default App;
