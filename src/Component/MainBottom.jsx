import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainBottom.css";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "react-bootstrap";

function MainBottom(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <div 
        class={props.pageName === "homePage" ? 'active row BottomBox' : 'row BottomBox'}
        style={{ alignItems: "center", marginBottom: 30 }}
      >
        <h2 class="col-4">
          <i class="fa-solid fa-house"></i>
        </h2>
        <h2
          class="col-6"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#f3b359",
          }}
        >
          <nav>
            <ul>
              <li style={{}}>
                <Link
                  className="nav-item Momainb"
                  style={{ textDecorationLine: "none" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </h2>
      </div>
      <div 
        class={props.pageName === "aboutPage" ? 'active row BottomBox' : 'row BottomBox'}
        style={{ alignItems: "center", marginBottom: 30 }}
      >
        <h2 class="col-4">
          <i class="fa-solid fa-address-card"></i>
        </h2>
        <h2
          class="col-6"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#f3b359",
          }}
        >
          <nav>
            <ul>
              <li style={{}}>

                  <Link
                    className="nav-item "
                    style={{
                      color: "black",
                      textDecorationLine: "none",
                    }}
                    to="/about"
                  >
                    About
                  </Link>
              </li>
            </ul>
          </nav>
        </h2>
      </div>
      <div
        class={props.pageName === "educationPage" ? 'active row BottomBox' : 'row BottomBox'}
        style={{ alignItems: "center", marginBottom: 30 }}
      >
        <h2 class="col-4">
          <i class="fa-solid fa-user-graduate"></i>
        </h2>
        <h2
          class="col-6"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#f3b359",
          }}
        >
          <nav>
            <ul>
              <li style={{}}>
                <Link
                  style={{ color: "black", textDecorationLine: "none" }}
                  to="/education"
                >
                  Education
                </Link>
              </li>
            </ul>
          </nav>
        </h2>
      </div>
      <div
        class={props.pageName === "skillsPage" ? 'active row BottomBox' : 'row BottomBox'}
        style={{ alignItems: "center", marginBottom: 30 }}
      >
        <h2 class="col-4">
          <i class="fa-solid fa-laptop-code"></i>
        </h2>
        <h2
          class="col-6"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#f3b359",
          }}
        >
          <nav>
            <ul>
              <li style={{}}>
                <Link
                  style={{ color: "black", textDecorationLine: "none" }}
                  to="/skills"
                >
                  Skills
                </Link>
              </li>
            </ul>
          </nav>
        </h2>
      </div>
      <div
        class={props.pageName === "contactPage" ? 'active row BottomBox' : 'row BottomBox'}
        style={{ alignItems: "center", marginBottom: 30 }}
      >
        <h2 class="col-4">
          <i class="fa-solid fa-address-book"></i>
        </h2>
        <h2
          class="col-6"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#f3b359",
          }}
        >
          <nav>
            <ul>
              <li style={{}}>
                <Link
                  style={{ color: "black", textDecorationLine: "none" }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </h2>
      </div>
    </div>
  );
}

export default MainBottom;
