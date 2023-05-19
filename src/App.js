import logo from "./logo.svg";
import "./App.css";
import MainBottom from "./Component/MainBottom";
import MainCm from "./Component/MainCm";
import AboutPage from "./Route/AboutPage";

function App() {
  return (
    <div class="row" style={{ minHeight: "100vh" }}>
      <div class="col-lg-2 col-md-5 col-sm-12 BoxMBottom" style={{ display: "flex", backgroundColor: "#f6ba13" , justifyContent:"center", paddingTop:350}}><MainBottom pageName ="homePage"/></div>
      <div class="col-lg-10 col-md-5 col-sm-12" style={{ display: "flex" ,backgroundColor: "#282c34", color: "White", fontFamily: "'Mitr', sans-serif",justifyContent:"center"}}>
        <MainCm />
      </div>
    </div>
  );
}

export default App;
