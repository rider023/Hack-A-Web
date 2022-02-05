import React, {useState} from "react";
import logo from "../images/logo.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "./Image";
import { Link } from "react-router-dom";

function LandingPage() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div style={{ backgroundColor: "#1A374D" }}>
      <Container>
        <Row style={{ marginTop: "1%" }}>
          <Col style={{ display: "flex", justifyContent: "left" }}>
            <div style={{ marginLeft: "5%" }}>
              <img src={logo} style={{ width: "100px", height: "90px" }} />
            </div>
            <div style={{ paddingTop:"3.7%", textDecoration: "none" }}>
              <Link to="/" style={{ textDecoration: "none", color: "#B1D0E0" }}>
                <h2 style={{ fontFamily: "sans-serif " }}>OnlineClinic</h2>
              </Link>
            </div>
          </Col>
          <Col
            style={{
              paddingTop: "2%",
              display: "flex",
              justifyContent: "right",
            }}
          >
            <div
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "4%",
              }}
            >
              <Link to="/Discover" style={{ textDecoration: "none" }}>
              <h2 style={{color: "white", fontFamily: "sans-serif " }}>Discover</h2>
              </Link>
            </div>
            <div style={{ marginLeft: "4%" }}>
             
                <h2 style={{ color: "white", fontFamily: "sans-serif ", cursor:"pointer"}} onClick= {
                  (e) => setIsActive(!isActive)
                }>
                  Join
                </h2>
              
              { isActive && (
             <div className="dropDown" style={{color:"#fff",fontWeight:"400",fontSize:"160%"}}>
                 <Link to="/Signup" style={{ textDecoration: "none" }}> 
              <h3 style={{color:"#fff",fontWeight:"400",fontSize:"100%",position:"absolute",top:"12%"}}>As Doctor</h3>
              </Link>
              <Link to="/Signup" style={{ textDecoration: "none" }}> 
              <h3 style={{color:"#fff",fontWeight:"400",fontSize:"100%",position:"absolute",top:"18%"}}>As Paitent</h3>
              </Link>
              </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <Row
        style={{
          display: "flex",
          paddingTop: "10%",
          paddingBottom: "5%",
          marginRight: "1%",
        }}
      >
        <Col style={{ display: "flex", justifyContent: "center",minWidth:"300px"}}>
          <Image />
        </Col>
        <Col style={{ display: "block", justifyContent: "left" }}>
          <div style={{ fontSize: "300%", color: "white", marginBottom: "1%" }}>
            Get Your Doctor's Advice Online
          </div>
          <div
            style={{ fontSize: "200%", color: "white", marginBottom: "10%" }}
          >
            Expert Doctors from all over the world!
          </div>
          <Link to="/Discover">
            <Button
              style={{
                padding: "2% 6%",
                border: "none",
                backgroundColor: "#045AA3",
                color: "white",
                fontSize: "200%",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Get Started
            </Button>
          </Link>
        </Col>
      </Row>
  
    </div>);
}

export default LandingPage;
