import React, { useState, useEffect, useRef } from "react";
import "./MainCm.css";

function MainCm() {
  const [text, setText] = useState("");
  const words = [
    "Hello",
    "nice to see you",
    "Im Tanasin Yodsomboon",
    "Front-End Developer",
  ];
  let i = 0;
  let offset = 20;
  let len = words.length;
  let forwards = true;
  let skip_count = 0;
  let skip_delay = 15;
  let speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      const part = words[i].substr(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      setText(part);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div
        className="  image-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop:300
        }}
      >
        <img
          style={{ borderRadius: "50%" }}
          src="https://sv1.picz.in.th/images/2023/05/09/yGkAnn.png"
          alt="yGkAnn.png"
        />
      </div>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div className="" style={{ paddingTop:100 }}>
            <h1></h1>
          </div>
          <div style={{ padding: 0 }}>
            <div className="typing-text">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCm;
