import { useEffect, useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function App() {

  const [allPhones,setAllPhones] = useState([])

useEffect (() =>{
getData()
},[])

 const getData = async() => {
   try {
    const response = await axios.get("http://localhost:5005/api/phones")
  console.log(response)
  setAllPhones(response.data)
   } catch (error) {
    console.log(error)
   }
  
 }

  return (
    <>
     {allPhones.map((eachElement,i)=>{
      return(
        <a key={i} href={`/phones/${eachElement.id}`}><li>{eachElement.name}</li></a>

      )
     })}
    </>
  )
}

export default App
