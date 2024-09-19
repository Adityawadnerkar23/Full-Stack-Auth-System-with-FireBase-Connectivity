import{Link}from"react-router-dom";
import {useEffect,useState}from"react";
function NavBar()
{
const [un,setUn]=useState();
useEffect( ()=>{
let u = localStorage.getItem("un");
setUn(u);
},[]);
return(
<>
<center>
<div className="nav">
{(un == null) && (<Link to="/">Login</Link>)}
{(un == null) && (<Link to="/signup">Sign Up</Link>)}
{(un == null) && (<Link to="/home">Home</Link>)}
{(un == null) && (<Link to="/about">About</Link>)}
{(un == null) && (<Link to="/cp">ChangePassword</Link>)}
{(un == null) && (<Link to="/fp">ForgotPassword</Link>)}
</div>
</center>
</>
);
}
export default NavBar;



