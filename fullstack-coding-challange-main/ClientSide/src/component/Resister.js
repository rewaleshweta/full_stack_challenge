import React ,{useState} from "react";
import "../Style/register.css"
import 'react-toastify/dist/ReactToastify.css';
import {json, useNavigate} from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import Nav from "./Nav"



export default function Register(){
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      name:"",
      email:"",
      password:"",
      cPassword:""
    })
    const [err, setErr] = useState(false);
    const [er, setEr] = useState(null);
    const[errtext , setErrText]= useState("")
    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [confirmPasserr, setConfirmPassErr] = useState(false);
    const [loder , setLoder] = useState(false);

    function sumbmitForm(e){
       e.preventDefault();
       if(!formData.name ||!/^[a-zA-Z]+$/.test(formData.name)){
       
          setErrText("Enter the Valid Name not include space")
          setErr(true)
       }else if(!formData.email ||!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)){
         setErrText("Enter the Valid Email")
         setEmailErr(true)
     }else if(!formData.password|| formData.password.length<6){
        setErrText("Password length at least 6 latter")
        setPassErr(true)
      
     }else if(formData.password!==formData.cPassword){
        setErrText("Password is not matching")
        setConfirmPassErr(true)
     }else{
      setLoder(true)
      fetch("https://online-market.onrender.com/user/signup",{
           method:"POST",
           headers:{
            "content-type":"application/json"
           },
           body:JSON.stringify(formData)
      }
      ).then(res=>res.json())
      .then(data=>{
         console.log(data)
         if(data.status==="Success"){
            setLoder(false)
            toast.success("Rgister Scessfully");
            setFormData({
               name:"",
               email:"",
               password:"",
               cPassword:""
              })
            setTimeout(()=>navigate("/login"),3000)
         }else if(data.status==="Failed"){
            setLoder(false)
            setEr("User Email Id Alredy Present")
         }
         else{
            setLoder(false)
         }
      })
     }
    }
    return<>
        <Nav/>
      <div id="main-container-of-form">
      <h2 id="form-name">Signup Form</h2>
      <div id="signup-container">
       
        <form onSubmit={sumbmitForm}>
        {er&&<div id="errText">{er}</div>}
            <input type="text" placeholder="Enter the Name" className={err?"err":"signupform-input"} onChange={(e)=>{
               setFormData({...formData,name:e.target.value});
               setErr(false);
               setErrText("");
               setEr(null);
               }} value={formData.name}></input><br></br>
               {err&&errtext&&<div id="errText">{errtext}</div>}
            <input type="email" placeholder="Enter the email"className={emailErr?"err":"signupform-input"}  onChange={(e)=>{setFormData({...formData,email:e.target.value}); setEmailErr(false); setErrText("");setEr(null);}} value={formData.email}></input><br></br>
            {emailErr&& errtext&&<div id="errText">{errtext}</div>}
            <input type="password" placeholder="Enter the Password"className={passErr?"err":"signupform-input"}  onChange={(e)=>{setFormData({...formData,password:e.target.value});setPassErr(false); setErrText("");setEr(null);}} value={formData.password}></input><br></br>
            {passErr&& errtext&&<div id="errText">{errtext}</div>}
            <input type="password" placeholder="Enter the Confirm Password"className={confirmPasserr?"err":"signupform-input"}  onChange={(e)=>{setFormData({...formData, cPassword:e.target.value}); setConfirmPassErr(false);setErrText("");setEr(null);}} value={formData.cPassword}></input><br></br>
            {confirmPasserr&& errtext&&<div id="errText">{errtext}</div>}
            <div id="btn-container-signup"><button id="signup-btn">{loder?<div id="loderabc"></div>:"Rgister"}</button></div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          theme="light"
        />
    </div>
    <h4 id="valid-user">Already Have An Account? <span id="color-change" onClick={()=>navigate("/login")}>Login</span></h4>
    </div>
    </>
}