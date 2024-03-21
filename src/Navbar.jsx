import react, { useState } from 'react';
import './Navbar.css'
import { MdOutlineMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
export default function Navbar({handleActive}){
  const [hamClicked, setHamClicked]=useState(false);
  return <>
  <div className="nav-bar">
  <span className="nav-logo">NP</span>
  <ul className={hamClicked?"nav-list active":"nav-list"}>
    <li onClick={()=>handleActive("SignUp")}>Sign up</li>
    <li onClick={()=>handleActive("SignIn")}>Sign In</li>
    <li>item</li>
    <li onClick={()=>handleActive("UserProfile")}>Profile</li>
  </ul>
  <div onClick={()=>setHamClicked(!hamClicked)} className="ham-menu-icon">{hamClicked?<RxCross2/>:<MdOutlineMenuOpen /> }</div>
  
  </div>
  </>
}