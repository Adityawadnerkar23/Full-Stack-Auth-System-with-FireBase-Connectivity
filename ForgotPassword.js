import NavBar from "./NavBar";
import {useState,useRef,useEffect}from "react";
import app from "./Firebase";
import{getAuth,sendPasswordResetEmail}from "firebase/auth";
import{useNavigate}from "react-router-dom";

function ForgotPassword()
{
const nav=useNavigate();
const rUn=useRef();
const [username,setUserName]=useState("");
const [msg,setMsg]=useState("");

const hUserName=(event)=>{setUserName(event.target.value);}
useEffect( ()=>{
let u = localStorage.getItem("un");
if (u!=null)
nav("/home");
}, []);
const sendmail =(event)=>{
event.preventDefault();
const auth=getAuth();
sendPasswordResetEmail(auth,username)
.then(res=>{
nav("/");
     })
.catch(err => setMsg("issue"+err));
}
return(
<>
<center>
<NavBar/>
<h1>Forgot Password Page</h1>
<form onSubmit={ sendmail }>
<input type="text"placeholder="enter reg email address"
ref={rUn} onChange={hUserName} value={username}/>
<br/><br/>
<input type="submit" value="Reset" />
<br/><br/>
</form>
<h2>check your email</h2>
<h2>{ msg }</h2>
</center>
</>
);
}

export default ForgotPassword;