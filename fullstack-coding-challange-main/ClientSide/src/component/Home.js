import React from "react"
import ImageSlider, { Slide } from "react-auto-image-slider"
import TopNav from './TopNav';
import LandingPage from "./LandingPage";
import { useNavigate } from "react-router-dom";

export default function Home (){
  const token = localStorage.getItem("user-token")
  const Navigate = useNavigate();
  
  console.log(token)
    return <>
    {token? <>
      <TopNav/>
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img className="slides-of-home" alt="img3" src="https://foodtruckempire.com/wp-content/uploads/13-Vegetables-to-Plant-in-Fall-for-Spring-Harvest-This-Year.jpg" />
      </Slide>
      <Slide>
        <img className="slides-of-home" alt="img2" src="https://media.istockphoto.com/id/1440144771/photo/black-woman-customer-and-grocery-shopping-cart-in-supermarket-store-retail-outlet-or-mall.jpg?s=1024x1024&w=is&k=20&c=fLNTMADoi0vI8v4Y1g4JwQ2d5HPKfUcxwtfPbjbFfHA=" />
      </Slide>
      <Slide>
        <img className="slides-of-home" alt="img1" src="https://plus.unsplash.com/premium_photo-1664202219210-abf6ae3bdf04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/>
      </Slide>
    </ImageSlider>
    </>:<LandingPage/>}
     
   </>
}