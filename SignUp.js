import NavBar from "./NavBar";
import {useState,useRef,useEffect}from "react";
import app from "./Firebase";
import{getAuth,createUserWithEmailAndPassword}from "firebase/auth";
import{useNavigate}from "react-router-dom";

function SignUp()
{
const nav=useNavigate();
const rUn=useRef();
const rPw1=useRef();
const[username,setUserName]=useState("");
const[password1,setPassword1]=useState("");
const[password2,setPassword2]=useState("");
const[msg,setMsg]=useState("");

const hUserName=(event)=>{setUserName(event.target.value);}
const hPassword1=(event)=>{setPassword1(event.target.value);}
const hPassword2=(event)=>{setPassword2(event.target.value);}

useEffect(()=>{
let u=localStorage.getItem("un");
if(u!=null)
nav("/home");
},[]);

const save=(event)=>{
event.preventDefault();
if(password1 == password2)
{
const auth=getAuth();
createUserWithEmailAndPassword(auth,username,password1)
.then(res=>nav("/"))
.catch(err =>setMsg("isssssuueeee"+ err));
}
else
{
setMsg("passwords did not match");
setPassword1("");
setPassword2("");
rPw1.current.focus();
}
}
return(
<>
<center>
<NavBar/>
<h1>Signup page</h1>
<form onSubmit={save}>
<input type="text" placeholder="enter email address"
ref={rUn}onChange={hUserName}value={username}/>
<br/><br/>
<input type="password"placeholder="enter password"
ref={rPw1}onChange={hPassword1}value={password1}/>
<br/><br/>
<input type="password"placeholder="confirm password"
onChange={hPassword2}value={password2}/>
<br/><br/>
<input type="submit"value="Register"/>
<br/><br/>
</form>
<h2>{msg}</h2>
</center>
</>
);
}
export default SignUp;
