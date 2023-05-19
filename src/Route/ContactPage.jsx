import React from "react";
import MainBottom from "../Component/MainBottom";
import "./Page.css";

function ContactPage(props) {
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
          <MainBottom pageName="contactPage"/>
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
              justifyContent:"center"

            }}
          >
            <h1>Contact</h1>
          </div>
          <div className style={{ display:"flex",marginTop: 100,justifyContent:"left" }}>
            <h1>FaceBook</h1>
          </div>
          <div>
            <h1>https://www.facebook.com/tatae.thanasin</h1>
          </div>
          <div>
            <h1>Instragram</h1>
          </div>
          <div>
            <h1>Tanasinza</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
