import React from 'react';
import logo from "../images/logo.png";
import {Button, Col, Container, Nav,Row} from 'react-bootstrap';
import Image from './Image';
import { Link } from 'react-router-dom';
import { faGoogle, faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard() {
  return <div>
      <Container>
      <Row style = {{marginTop:"1%"}}>
        <Col style = {{display:"flex",justifyContent:"left"}}>
        <div style = {{marginLeft:"5%"}}>
      <img src={logo} style = {{width:'100px',height:'90px'}}/>
    </div>
      <div style = {{paddingTop:"3.7%",textDecoration:"none"}}><Link to='/' style = {{textDecoration:"none",color:"#B1D0E0"}}><h2 style = {{fontFamily:"sans-serif "}}>OnlineClinic</h2></Link></div>
        </Col>
        <Col style = {{paddingTop:"2%",display:"flex",justifyContent:"right"}}>
        <div style = {{textDecoration:"none",color:"white",marginRight:"4%"}}><h2 style = {{fontFamily:"sans-serif "}}>Discover</h2></div>
        <div style = {{marginLeft:"4%"}}><Link to='/Signup' style = {{textDecoration:"none"}}><h2 style = {{color:"white",fontFamily:"sans-serif "}}>Join</h2></Link></div>
        </Col>
      </Row>
    </Container>
  </div>;
}

export default Dashboard;
