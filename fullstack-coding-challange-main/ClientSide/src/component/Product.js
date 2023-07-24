import "../Style/product.css"
import Ract ,{useEffect, useState, useContext} from "react"
import TopNav from "./TopNav"
import{NotiContext} from "../Context/ProductContex"
import LandingPage from "./LandingPage";


const API = "https://online-market.onrender.com/product";



export default function Product(){
   
    const [data, setData] = useState([]);
    const [search , setSearch] = useState("");
    const [searchData , setSearchData] = useState([]);

    
    useEffect(()=>{
   
      fetch(API)
      .then((res)=>res.json())
      .then((res)=>setData([...res.data]));
      
    },[])
   

    const {num,setNum,setAddProduct}= useContext(NotiContext);    
     function AddToCard(id){
        setNum(num+1)
       let ans= data.find(e=>e._id===id);
       setAddProduct(d=>[...d,ans]);    
     }
     function Search(){
    
      const search_regex= data.filter(e=>new RegExp(e.name.slice(0,4), 'i').test(search));
      console.log(search)
      setSearchData(search_regex)
      setSearch("")
    }
    const token = localStorage.getItem("user-token");
    return <>
    {token?<>
      <TopNav/>
    <div className="main-container">
    <div id="search-container">
    <input type="text" placeholder="Search by Name..."  id="search-input-feild" onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
    <img src="https://cdn.icon-icons.com/icons2/3392/PNG/512/small_search_icon_213735.png" id="search-icon" onClick={Search} />
    </div>
  { searchData.length>0? <div className="container-of-card">
   {searchData.map((d , i)=>{
    return <div id="card" key={i}>
    <div className="branding-of-product">     
     <h4 id="brand">{d.name}</h4>
      
   </div>  

   <div id="image-container">
     <img src={d.image} id="img-item"/>
   </div>
   <div id="price-container">
       <h3>{d.prize}</h3>
       <button id="btn" onClick={()=>AddToCard(d._id)}>Add To Card</button>
   </div>
 
</div>

   })}
   </div>:<div className="container-of-card">
   {data.map((d , i)=>{
    return <div id="card" key={i}>
    <div className="branding-of-product">     
     <h4 id="brand">{d.name}</h4>
      
   </div>  

   <div id="image-container">
     <img src={d.image} id="img-item"/>
   </div>
   <div id="price-container">
       <h3>{d.prize}</h3>
       <button id="btn" onClick={()=>AddToCard(d._id)}>Add To Card</button>
   </div>
 
</div>

   })}
   </div>}
</div>
    </>:<LandingPage/>}
   
</>
}