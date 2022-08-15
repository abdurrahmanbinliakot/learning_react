import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const userObj = {
  fname: "Abdur",
  lname: "Rahman",
  link: "https://www.reactjs.org",
  avatarLink: "https://avatars.githubusercontent.com/u/65095033?v=4",
};

const fullName = (obj) => obj.fname + " " + obj.lname;

const element = (
  <div>
    <h1>Hello, {fullName(userObj)}!</h1>
    <hr />
    <img src={userObj.avatarLink} alt={fullName(userObj)}></img>
    <br/>
    <a href={userObj.link}>React Link</a>
  </div>
);
root.render(element);

reportWebVitals();
