import React from "react";
import "./MainCm.css";

function MainCm() {
  return (
    <div class="row">
      <div
        class="col-6 "
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <div>
          <div className="mboxpage" style={{ padding: 8 }}>
            <h1>Portfolio's Tae</h1>
          </div>
          <div style={{ padding: 8 }}>
            <h1>Hello,</h1>
            <h1> My name is Tansin Yodsomboon</h1>
          </div>
        </div>
      </div>
      <div
        class="col-6 image-container"
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <img
          style={{ borderRadius: "50%" }}
          src="https://sv1.picz.in.th/images/2023/05/09/yGkAnn.png"
          alt="yGkAnn.png"
        />
      </div>
    </div>
  );
}

export default MainCm;
