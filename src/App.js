import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

function App() {
const [data, setData] = useState([])
const [input, setInput] = useState('')
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({data})=>{
      console.log(data)
      const sortArray = data.sort((a,b)=>{
        return a.title > b.title
      })
      console.log("sortArray", sortArray)
      setData(sortArray)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  useEffect(()=>{
    console.log(input)
  },[data, input])
  const filterData = data.filter((item)=>{
    if (input === ''){
      return item
    } 
    else {
      return item.title.toLowerCase().includes(input)

    }
  })
  return (
    <div className="App">
      <h1>Data</h1>
      <input type="text" placeholder='Search Data' onChange={(e)=> setInput(e.target.value)}/>
      {
        filterData.length ? filterData.map((item,i)=>{
          return <ul key={i}>
            <li>{item.title}</li>
          </ul>
        }) :null
      }
    </div>
  );
}

export default App;
