import NavBar from "./NavBar";
import {useState,useEffect}from "react";
import{useNavigate}from"react-router-dom";

function Home()
{
const nav=useNavigate();
const[username,setUserName]=useState("");

useEffect(()=>{
let u=localStorage.getItem("un");
if(u==null)
nav("/");
else setUserName(u);
},[]);
const lo =(event)=>{
event.preventDefault();
localStorage.removeItem("un");
nav("/");
}
return(
<>
<center>
<NavBar/>
<h1>Home Page</h1>
<h2>{username}</h2>
<form onSubmit={lo}>
<input type="submit" value="Logout"/>
</form>
</center>
</>
);
}
export default Home;
