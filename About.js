import NavBar from "./NavBar";
import {useState,useEffect}from "react";
import{useNavigate}from"react-router-dom";

function About()
{
return(
<>
<center>
<NavBar/>
<h1>About Page</h1>
<p><b>kamal sir teaches</b></p>
<p><b>js full stck</b></p>
<p><b>java full stack</b></p>
</center>
</>
);
}
export default About;
