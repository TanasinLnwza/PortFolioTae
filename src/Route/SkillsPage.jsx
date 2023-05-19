import React from "react";
import MainBottom from "../Component/MainBottom";
import "./Page.css";


function SkillsPage() {
  return (
    <div>
      <div class="row" style={{ minHeight: "100vh" }}>
        <div
          class="col-2 BoxMBottom"
          style={{
            display: "flex",
            backgroundColor: "#f6ba13",
            justifyContent: "center",
            paddingTop: 350,
          }}
        >
          <MainBottom pageName="skillsPage"/>
        </div>
        <div
          class="col-10 "
          style={{
            backgroundColor: "#282c34",
            color: "White",
            fontFamily: "'Mitr', sans-serif",
            paddingTop: 300,
            paddingLeft: 200,
          }}
        >
          <div
            className="BoxPage col-3"
            style={{
              display:"flex",
              textShadow: "1px 1px 2px black",
              justifyContent:"center",
            }}
          >
            <h1>Skills</h1>
          </div>
          <div className style={{ display:"flex",marginTop: 100,justifyContent:"left" }}>
            <h1>JavaScrip</h1>
          </div>
          <div>
            <h1>React</h1>
          </div>
          <div>
            <h1>NodeJs</h1>
          </div>
          <div>
            <h1>Css</h1>
          </div>
          <div>
            <h1>HTML</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
