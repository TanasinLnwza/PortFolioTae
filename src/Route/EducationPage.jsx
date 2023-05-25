import React from "react";
import MainBottom from "../Component/MainBottom";
import "./Page.css";
import EducationCard from "../Component/EducationCard";

function EducationPage() {
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
          <MainBottom pageName="educationPage"/>
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
              paddingBottom: 0,
              display: "flex",
              textShadow: "1px 1px 2px black",
              justifyContent: "center",
            }}
          >
            <h1>Education</h1>
          </div>
          <div
            className
            style={{ display: "flex", marginTop: 0, justifyContent: "left" }}
          >
            <EducationCard
              when="2017-2019"
              level="Vocational Certificate"
              school="Thanyaburi Technical College"
              type="Department of Electronics"
              gpa="3.50"
            />
          </div>
          <div style={{ display: "flex", marginTop: 0, justifyContent: "left" }}>
            <EducationCard
            schoolimg=""
              when="2019-2023"
              level="Bachelor Degrees"
              school="Rajamangala University of Technology Thanyaburi"
              type="Avionics Engineering ,Faculty of Engineering"
              gpa="3.01"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
