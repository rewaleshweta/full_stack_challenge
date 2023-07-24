import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Home";
import Product from "./Product";
import Order from "./Order";
import Register from "./Resister";
import Login from "./Login";
import LandingPage from "./LandingPage";


export default function AppRouter(){
    return<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </>
}