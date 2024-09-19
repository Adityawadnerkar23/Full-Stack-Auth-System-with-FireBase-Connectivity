import NavBar from"./NavBar";
import app from "./Firebase";
import {useState,useRef,useEffect}from "react";
import {getAuth,updatePassword,onAuthStateChanged}from "firebase/auth";
import {useNavigate}from "react-router-dom";

function ChangePassword()
{
const nav=useNavigate();
const rPw1=useRef();
const [password1,setPassword1]=useState("");
const [password2,setPassword2]=useState("");
const [msg,setMsg]=useState("");

const hPassword1=(event) =>{setPassword1(event.target.value);}
const hPassword2=(event) =>{setPassword2(event.target.value);}

useEffect( ()=> {
let u = localStorage.getItem("un");
if (u == null)
nav("/");
},[]);
const save = (event)=>{
event.preventDefault();
if(password1==password2)
{
const auth=getAuth();
onAuthStateChanged(auth,(user)=>{
updatePassword(user,password1)
.then(res =>{
localStorage.removeItem("un");
nav("/")
})
.catch(err => setMsg("isuue"+err));
})
}
else
{
setMsg("password did not match");
setPassword1("");
setPassword2("");
rPw1.current.focus();
}
}
return(
<>
<center>
<NavBar/>
<h1>Change Password PAge</h1>
<form onSubmit={save}>
<input type="password"placeholder="enter password"
ref={rPw1}onChange={hPassword1}value={password1}/>
<br/><br/>
<input type="password"placeholder="confirm password"
onChange={hPassword2}value={password2}/>
<br/><br/>
<input type="submit"value="Change"/>
<br/><br/>
</form>
</center>
</>
);
}
export default ChangePassword;