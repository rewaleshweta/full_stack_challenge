import logo from "../Images/logo.png";
import "../Style/topNav.css";
import React,{useContext} from "react";
import {Link} from "react-router-dom"
import {NotiContext} from "../Context/ProductContex"

export default function TopNav (){
  const {num,setNum}= useContext(NotiContext)
     return<>
       <nav id="top-nav">
             <div id="nav-container">
             <Link to="/home"> <h1 id="title">Super Market</h1></Link> 
           <div   id="logo-container"> <img src={logo}  id="logo" onClick={()=>setNum(null)}/>{num&&<div id="adddd">{num}</div>}</div>
             </div>
         </nav>
     </>
 }
 