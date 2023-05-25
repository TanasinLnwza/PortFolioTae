import React from "react";
import MainBottom from "../Component/MainBottom";
import "./Page.css";

function AboutPage(props) {
  const name = 'Tanasin Yodsomboon';
  return (
    <div>
      <div class="row" style={{ minHeight: "100vh" }}>
        <div
          class="col-lg-2 col-md-12 col-sm-12 BoxMBottom"
          style={{
            display: "flex",
            backgroundColor: "#f6ba13",
            justifyContent: "center",
            paddingTop: 350,
          }}
        >
          <MainBottom pageName="aboutPage" />
        </div>
        <div
          class="col-lg-10 col-md-12 col-sm-12 "
          style={{
            backgroundColor: "#282c34",
            color: "White",
            fontFamily: "'Mitr', sans-serif",
            paddingTop: 300,
            paddingLeft: 200,
          }}
        >
          <div
            className="BoxPage col-10"
            style={{
              display:"flex",
              paddingBottom: 0,
              marginRight: 200,
              textShadow: "1px 1px 2px black",
              justifyContent:"center"
            }}
          >
            <h1>About</h1>
          </div>
          <div className style={{ display:"flex",marginTop: 100,justifyContent:"left" }}>
            <h1>Name: {name}</h1>
          </div>
          <div>
            <h1>Age: 22        18/05/2001</h1>
          </div>
          <div>
            <h1>Height: 5.3 ft.</h1>
          </div>
          <div>
            <h1>Weight: 110.23 lb.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
