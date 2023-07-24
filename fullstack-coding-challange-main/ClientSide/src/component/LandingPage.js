import "../Style/landing.css"
import {Link} from "react-router-dom"
export default function LandingPage(){
    return<div className="landing-page-container">
         <div className="left-side-landing">
            <h1>Super Market</h1>
           <h4>Grocery stores are a great place to shop for healthy foods and home essentials here.</h4>
           <h4>
           <Link to="/login">Log-In </Link> or <Link to="/register"> Sign-Up</Link> 
           </h4>
         </div>
         <div className="right-side-landing">

         </div>
    </div>
}