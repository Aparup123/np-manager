import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import CreateNote from './CreateNote'
import data from './data.json'

function App() {
  const [count, setCount] = useState(0);
  const [active, setActive]=useState("");
  function handleActive(s){
    setActive(s);
    console.log("frm app.js ",s );
  }
  console.log(data);
  // data.push(  {
  //   "id": 5,
  //   "name": "Item 5"
  // })  
  delete data[1];
  return (
    <>
      <Navbar/>
      {active==""&&<CreateNote props={handleActive}/>}
    </>
  )
}

export default App
