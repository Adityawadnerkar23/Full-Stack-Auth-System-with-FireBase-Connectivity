import NavBar from "./NavBar";
import {useState,useRef,useEffect}from "react";
import app from "./Firebase";
import{getAuth,signInWithEmailAndPassword}from "firebase/auth";
import {useNavigate} from "react-router-dom";	

function Login()
{
const nav=useNavigate();
const rUn=useRef();
const rPw=useRef();
const[username,setUserName]=useState("");
const[password,setPassword]=useState("");
const[msg,setMsg]=useState("");

const hUserName=(event)=>{setUserName(event.target.value);}
const hPassword=(event)=>{setPassword(event.target.value);}

useEffect(()=>{
let u=localStorage.getItem("un");
if(u!=null)
nav("/home");
},[]);

const login=(event)=>{
event.preventDefault();
const auth=getAuth();
signInWithEmailAndPassword(auth,username,password)
.then(res => {
localStorage.setItem("un",username);
nav("/home");
})
.catch(err =>setMsg("isssssuueeee"+err));
}
return(
<>
<center>
<NavBar/>
<h1>Login Page</h1>
<form onSubmit={login}>
<input type="text"placeholder="enter registered email address"
ref={rUn}onChange={hUserName}value={username}/>
<br/><br/>
<input type="password"placeholder="enter password"
ref={rPw}onChange={hPassword}value={password}/>
<br/><br/>
<input type="submit"value="Login"/>
<br/><br/>
</form>
<h2>{msg}</h2>
</center>
</>
);
}
export default Login;
