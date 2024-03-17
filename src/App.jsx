import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import CreateNote from './CreateNote'
import Notes from './Notes'
import data from './data.json'
import SignUp from './SignUp'
import UserProfile from './UserProfile'

function App() {
  const [count, setCount] = useState(0);
  const [active, setActive]=useState("CreateNote");
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
      <Navbar handleActive={handleActive}/>
      {active=="SignUp"&&<SignUp handleActive={handleActive}/>}
      {active=="CreateNote"&&<CreateNote handleActive={handleActive}/>}
      {active=="Notes"&&<Notes handleActive={handleActive}/>}
      {active=="UserProfile"&&<UserProfile handleActive={handleActive}/>}
    </>
  )
}

export default App
