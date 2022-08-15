// import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Card  from './component/Card';
import Post from './component/Post';


// https://jsonplaceholder.typicode.com/posts


function App() {

  const [post,setPost] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data )=> setPost(data))
  },[])

console.log(post);
  const book ={
    name: "Quran",
    page:1200,
  }
  return (
    <div className="App">
      <Card book={book}/>
      <Post tableData={post}/>
    </div>
  );
}

export default App;
