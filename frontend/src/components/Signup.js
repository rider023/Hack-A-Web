import {React, useState} from 'react';
import Axios from "axios";
import logo from "../images/logo.png";
import {Button, Col, Container, Form, Nav,Row} from 'react-bootstrap';
import Image from './Image';
import { Link } from 'react-router-dom';
import { faGoogle, faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Signup() {
  const url="http://localhost:5000/user/signup"
  const [data,setData]=useState({
    full_name:"",
    email:"",
    password:""
  })
  function handle(event){
    const newData={...data}
    newData[event.target.id]=event.target.value
    setData(newData)
    console.log(newData)
  }
  function submit(){
    Axios.post(url,{
      full_name:data.full_name,
      email:data.email,
      password:data.password,
      confirm_password:data.confirm_password
    })
    .then(res => {
      console.log(res.data)
    })
  }
  return <div style = {{ backgroundColor:"#1A374D"}}>
  <Container>
    <Row style = {{marginTop:"1%"}}>
      <Col style = {{display:"flex",justifyContent:"left"}}>
      <div style = {{marginLeft:"5%"}}>
    <img src={logo} style = {{width:'100px',height:'90px'}}/>
  </div>
    <div style = {{paddingTop:"3.7%",textDecoration:"none"}}><Link to='/' style = {{textDecoration:"none",color:"#B1D0E0"}}><h2 style = {{fontFamily:"sans-serif "}}>OnlineClinic</h2></Link></div>
      </Col>
      <Col style = {{paddingTop:"2%",display:"flex",justifyContent:"right"}}>
     </Col>
    </Row>
  </Container>



  <Row style ={{display:"flex",paddingBottom:"5%",marginRight:"1%"}}>
    <Col style ={{display:"flex",justifyContent:"center",margin:"8% 0%",minWidth:"300px"}}>
    <Image/>
    </Col>
    <Col style ={{display:"block",justifyContent:"center",marginLeft:"3%"}}>
    <div style ={{color:"#B1D0E0",fontSize:"300%"}}>Welcome to OnlineClinic</div>
    <div style ={{color:"#B1D0E0",fontSize:"140%",marginBottom:"3%"}}>Already have an account?<Link to="/SignIn" style = {{textDecoration:"none",color:"#FFF89A"}}> Sign In.</Link></div>
    <form  style ={{justifyContent:"center"}}>
    <label style ={{display:"block",fontSize:"160%",color:"white",marginBottom:"2%"}}>Name </label>
    <input onChange={(event) => handle(event)} id="full_name" value={data.full_name} type="text" placeholder="Your Name" style ={{display:"block",backgroundColor:"white",width:"80%",marginBottom:"2%",height:"50px",borderRadius:"22px"}}/>
    <label  style ={{display:"block",fontSize:"160%",color:"white",marginBottom:"2%"}}>Email </label>
    <input onChange={(event) => handle(event)} id="email" value={data.email} type="Email" placeholder="email" style ={{display:"block",backgroundColor:"white",width:"80%",marginBottom:"2%",height:"50px",borderRadius:"22px"}}/>
    <label style ={{display:"block",fontSize:"160%",color:"white",marginBottom:"2%"}} >Password </label>
    <input onChange={(event) => handle(event)} id="password" value={data.password}  type="password" placeholder="Password" style ={{display:"block",backgroundColor:"white",width:"80%",marginBottom:"8%",height:"50px",borderRadius:"22px"}}/>
    <label style ={{display:"block",fontSize:"160%",color:"white",marginBottom:"2%"}} >Confirm Password </label>
    <input onChange={(event) => handle(event)} id="confirm_password" value={data.confirm_password}  type="password" placeholder="Confirm Password" style ={{display:"block",backgroundColor:"white",width:"80%",marginBottom:"8%",height:"50px",borderRadius:"22px"}}/>
    <Button onClick={submit} style={{display:"block",marginBottom:"2%",padding:"1% 28% ",borderRadius:"22px", border:"none",backgroundColor:"#406882",color:"white",textDecoration:"none"}}>
  Create Account
   {/* <b style ={{backgroundColor:"#406882",fontSize:"150%"}}>Create Account</b> */}
  </Button>
    </form>
    <h4 style ={{marginBottom:"3%",marginLeft:"28%",color:"white"}}>or continue with</h4>
    <FontAwesomeIcon icon={faGoogle} style ={{margin:"2% 10%",color:"white",width:"8%",height:"6%"}}/>
    <FontAwesomeIcon icon={faFacebook} style ={{margin:"2% 10%",color:"white",width:"8%",height:"6%"}}/>
    <FontAwesomeIcon icon={faApple} style ={{margin:"2% 10%",color:"white",width:"8%",height:"6%"}}/>
    </Col>
  </Row>
</div>
}

export default Signup;
