import logo from "../Images/logo.png";
import "../Style/topNav.css";
import React,{useContext} from "react";
import navbar_logo from '../Images/navbar_logo.jpg'
import {Link} from "react-router-dom"
import {NotiContext} from "../Context/ProductContex"

export default function TopNav (){
  const {num,setNum}= useContext(NotiContext)
     return<>
       <nav id="top-nav">
             <div id="nav-container">
              <img src={navbar_logo}/>           
          
             <Link to="/home"> <h1 id="title">super Market</h1></Link> 
                 <Link to="/product" ><h4 id="pro">Product</h4></Link>
                 <Link to="/order"><div   id="logo-container"> <img src={logo}  id="logo" onClick={()=>setNum(null)}/>{num&&<div id="adddd">{num}</div>}</div></Link>
                  <Link to="/" ><h4 onClick={()=>localStorage.clear()} className="log-out-btn">logout</h4></Link>
             </div>
         </nav>
     </>
 }
 