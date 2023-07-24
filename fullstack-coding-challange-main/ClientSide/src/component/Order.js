import React, { useContext, useState } from "react"
import TopNav from "./TopNav"
import "../Style/order.css"
import "../Style/product.css"
import { NotiContext } from "../Context/ProductContex"
import plus from "../Images/plus-icon-black-2.png"
import minus from "../Images/Minus-Symbol-PNG-Photo-Image.png"
import LandingPage from "./LandingPage"

export default function Order(){
    let {addProduct,setAddProduct} = useContext(NotiContext);
    const [quantity , setQuantity] = useState(1)
    console.log(addProduct)
    let sum = 0;

    function deleteFunction(id){
      setAddProduct(addProduct.filter(t=>t._id!==id))
    }
    const token = localStorage.getItem("user-token");
    return<>
    {token?<>
      <TopNav/>
    <h1 id="name-cart"><i>Shoping Cart</i></h1>
       <div id="Order-container">
    
       {addProduct.length>0 && addProduct.map((d,i)=>{
         {sum+=parseInt(d.prize)}
          return<div key={i}>
          <div id="order-div">
          <div id="order-img-cont">
          <img src={d.image} id="order-img"/>
          </div>
         <div id="name-price-cont">
          <h4 id="name-order">{d.name}</h4>
          <h3 id="price-order">{d.prize}</h3>
      </div>
      <div className="quantity-of-product">
       <h4 className="quantity-naming">Quanitity</h4>
       <div>
           <img  src={plus}  className="incremet-dec-btn" onClick={()=>setQuantity(quantity+1)}/>
           <span className="naming-of-the-contity-number">{d.quantity}</span>
           <img  src={minus} className="incremet-dec-btn" onClick={()=>setQuantity(quantity-1)}/>
       </div>
      </div>
         <div>
         <h4 id="name-order">total price</h4>
          <h3 id="price-order">{parseInt(d.prize)*d.quantity}</h3>
         </div>
         <button id="delete-Order" onClick={()=>deleteFunction(d._id)}>Delete</button>
      </div>
      </div>
       })}
   <hr></hr>
<div>
  <h4 id="total">Total Amount = {`RS ${sum}`}</h4>
</div>

      
    </div>
    </>:<LandingPage/>}
    
    </>
}