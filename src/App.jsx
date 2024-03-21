import { useState } from 'react'
import {app} from './firebase.js'
import {getAuth,onAuthStateChanged} from "firebase/auth"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import CreateNote from './CreateNote'
import Notes from './Notes'
import data from './data.json'
import SignUp from './SignUp'
import SignIn from './SignIn'
import UserProfile from './UserProfile'
const auth=getAuth(app);
function App() {
  const [currentUser, setCurrentUser]=useState(auth.currentUser);
  
  const [count, setCount] = useState(0);
  const [active, setActive]=useState("CreateNote");
  function handleActive(s){
    setActive(s);
    console.log("frm app.js ",s );
  }
    console.log(data);
  console.log(auth.currentUser);
  // data.push(  {
  //   "id": 5,
  //   "name": "Item 5"
  // })  
  delete data[1];
  return (
    <>
      <Navbar handleActive={handleActive}/>
      {active=="SignUp"&&<SignUp handleActive={handleActive}/>}
       {active=="SignIn"&&<SignIn handleActive={handleActive}/>}
      {active=="CreateNote"&&<CreateNote handleActive={handleActive} currentUser={currentUser}/>}
      {active=="Notes"&&<Notes handleActive={handleActive}/>}
      {active=="UserProfile"&&<UserProfile handleActive={handleActive}/>}
    </>
  )
}

export default App
