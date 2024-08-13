import React from 'react'
import { useState,useEffect } from "react"
import axios from 'axios'

const App = () => {
  const [jokes, setJokes] = useState("")
  

 useEffect(()=>{
   axios.get('http://localhost:4000/api/special').then((res)=>{
    //  setJokes(res.mess)
    console.log(res.data.message);
   })
   .catch((error)=>{
     console.log("i am error")
   })
 },[])
  return (
    <div>
      <h1>hello1345678</h1>
      {/* <h1>{jokes}</h1> */}
    </div>
  )
}

export default App
