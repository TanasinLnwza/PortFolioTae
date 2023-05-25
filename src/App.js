import logo from "./logo.svg";
import "./App.css";
import MainBottom from "./Component/MainBottom";
import MainCm from "./Component/MainCm";
import AboutPage from "./Route/AboutPage";
import HNavBar from "./Component/HNavBar";
function App() {
  return (
    <div>
      <div className="MoblineNavbar"><HNavBar/></div>
      <div class="row" style={{ minHeight: "100vh" }}>
        <div
          class="col-lg-2 BoxMBottom"
          style={{
            backgroundColor: "#f6ba13",
            justifyContent: "center",
            paddingTop: 350,
          }}
        >
          <MainBottom pageName="homePage" />
        </div>
        <div
          class="col-lg-10 "
          style={{
            display: "flex",
            backgroundColor: "#282c34",
            color: "White",
            fontFamily: "'Mitr', sans-serif",
            justifyContent: "center",
          }}
        >
          <MainCm />
        </div>
      </div>
    </div>
  );
}

export default App;
