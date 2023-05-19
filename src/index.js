import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AboutPage from "./Route/AboutPage";
import EducationPage from './Route/EducationPage';
import SkillsPage from './Route/SkillsPage';
import ContactPage from './Route/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/about",
    element: <div><AboutPage /></div>,
  },
  {
    path: "/education",
    element: <div><EducationPage /></div>,
  },
  {
    path: "/skills",
    element: <div><SkillsPage /></div>,
  },
  {
    path: "/contact",
    element: <div><ContactPage /></div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
