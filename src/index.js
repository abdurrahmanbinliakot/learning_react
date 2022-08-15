import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

let timer =()=>{
  const element = (
    <div>
      <h1>একটি টাইমার এর উদাহরণ</h1>
      <h2> এখন সময়: {new Date().toLocaleTimeString('bn-BD')}</h2>
    </div>
    );
    root.render(element);
}

setInterval(timer,1000)

reportWebVitals();
