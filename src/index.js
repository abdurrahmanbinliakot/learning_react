import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

// Fuctional Component
/* function Welcome(arrg){
  console.log(arrg);
  return <h1>Hello {arrg.name}!</h1>;
}
const element= (
  <div>
    <Welcome name="Abdur Rahman" />
    <Welcome name="Tanim Billah" />
    <Welcome name="Arif Billah" />
  </div>
);
root.render(element) */



//Example of a comment component

const comment = {
  date: new Date(),
  text: "I am enjoing learning React!",
  author: {
    name: "Abdur Rahman",
    avatarUrl: "https://avatars.githubusercontent.com/u/65095033?v=4",
  },
};

let dateFormater = (date) => date.toLocaleDateString();
let Avatar=(arrg)=> {
  return <img src={arrg.user.avatarUrl} alt={arrg.user.name} />;
}

let Userdetail=(arrg)=> {
  return (
    <div>
      <Avatar user={arrg.user} />
      <div>{arrg.user.name}</div>
    </div>
  );
}

let Comment=(arrg)=> {
  // console.dir('hi')
  // process.stdout.write("hi")
  return (
    <div>
      <Userdetail user={arrg.user} />
      <p>{arrg.comment}</p>
      <p>{dateFormater(arrg.date)}</p>
    </div>
  );
}

const element = (
  <Comment date={comment.date} user={comment.author} comment={comment.text} />
);

root.render(element);


reportWebVitals();
