import React, { useState } from "react";
import emailjs from "emailjs-com"
import { Button, Col, Row, Card, Carousel, Container } from "react-bootstrap";
import logo from "../images/logo.png";
import pic from "../images/doctor.png";
import Doctor1 from "../images/doctorpic1.jpg";
import Paitent1 from "../images/person1.jpg";
import { Link } from "react-router-dom";

function Discover() {
  const navStyle = {
    fontSize: "120%",
    color: "#fff",
    paddingTop: "2%",
    paddingLeft: "4%",
    textDecoration:"none"
  };
  const cardStyle = {
    color: "#fff",
    marginLeft: "-0.8rem",
    justifyItem: "center",
    margin: "auto",
  };

  const hstyle = {
    paddingBottom: "2rem",
    paddingTop: "2rem",
    fontSize: "1.4rem",
    fontWeight: "300",
  };

  const pStyle = {
    paddingBottom: "2rem",
    color: "#B1D0E0",
    fontSize: "1rem",
    fontWeight: "400",
  };
  const [isActive, setIsActive] = useState(false);
  const [Active, setActive] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_ba05nde','template_n358vgs',event.target,'user_XQZLfdP4na11L1AnqPxQG').then(res=>{console.log(res);}).catch(err=>{console.log(err);});
  }
  return (
    <div>
      {/* Navbar Section */}
      <Container>
        <Row
          style={{ display: "flex", marginTop: "1%", marginBottom: "10%" }}
        >
          <Col style={{ display: "flex", justifyContent: "left" }}>
            <img
              src={logo}
              style={{ width: "5rem", height: "5rem" }}
              alt="logo"
            />
            <Link to="/">
              <h2
                style={{
                  textDecoration: "none",
                  color: "#B1D0E0",
                  display: "inline-block",
                  fontFamily: "sans-serif ",
                  paddingTop: "12%",
                }}
              >
                OnlineClinic
              </h2>
            </Link>
          </Col>

          <Col
            style={{
              paddingTop: "1.4%",
              display: "flex",
              justifyContent: "right",
            }}
          >
            <div style={navStyle} href="">
             <a href='#about' style={{textDecoration:'none',color:'white'}}> About</a>
            </div>
            
            <div style={navStyle} href="">
            <a href='#contact' style={{textDecoration:'none',color:'white'}}>Contact Us</a>
            </div>
      
            {/* <Link
              to="/SignIn"
              style={{ textDecoration: "none", paddingRight: "10%" }}
            > */}
            <div
              style={{
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#fff",
                fontSize: "120%",
                paddingTop: "2%",
                paddingLeft: "4%",
                cursor: "pointer",
              }}
              onClick={(e) => setIsActive(!isActive)}
            >
              SignIn
            </div>
            {isActive && (
              <div
                className="dropDown"
                style={{ color: "#fff", fontWeight: "200", fontSize: "100%" }}
              >
                <Link to="/SignIn" style={{ textDecoration: "none" }}>
                  <h3
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "100%",
                      position: "absolute",
                      top: "10%",
                      right: "16.6%",
                    }}
                  >
                    As Doctor
                  </h3>
                </Link>
                <Link to="/SignIn" style={{ textDecoration: "none" }}>
                  <h3
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "100%",
                      position: "absolute",
                      top: "14%",
                      right: "16.6%",
                    }}
                  >
                    As Paitent
                  </h3>
                </Link>
              </div>
            )}

            <div
              style={{
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#fff",
                fontSize: "120%",
                paddingTop: "2%",
                paddingLeft: "4%",
                cursor: "pointer",
              }}
              onClick={(e) => setActive(!Active)}
            >
              Sign Up
            </div>
            {Active && (
              <div
                className="dropDown"
                style={{ color: "#fff", fontWeight: "200", fontSize: "100%" }}
              >
                <Link to="/Signup" style={{ textDecoration: "none" }}>
                  <h3
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "100%",
                      position: "absolute",
                      top: "10%",
                      right: "2%",
                    }}
                  >
                    As Doctor
                  </h3>
                </Link>
                <Link to="/Signup" style={{ textDecoration: "none" }}>
                  <h3
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "100%",
                      position: "absolute",
                      top: "14%",
                      right: "2%",
                    }}
                  >
                    As Paitent
                  </h3>
                </Link>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      {/* Header Section */}

      <Row id="about">
        <Col>
          <div
            style={{
              color: "#fff",
              fontSize: "360%",
              marginLeft: "10%",
              marginTop: "1%",
              fontWeight: "600",
              lineHeight: "5rem",
            }}
          >
            10,000+ best doctors are available for you, Pick Your choice!
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: "1.8rem",
              marginLeft: "10%",
              fontWeight: "300",
            }}
          >
            We are an online clinic which tries to provide you the best and affordable Doctors from all over the
            world.
          </div>
        </Col>
        <Col lg-1 md-2>
          <img
            src={pic}
            style={{
              width: "60%",

              height: "auto",
              marginLeft: "20%",
              borderRadius: "100%",
            }}
            alt="pic"
          />
        </Col>
      </Row>

      {/* Main Section */}

      <h2
        style={{
          color: "#fff",
          fontSize: "2.4rem",
          marginLeft: "5%",
          fontWeight: "600",
          lineHeight: "5rem",
        }}
      >
        Top Doctor’s
      </h2>
      <Card
        style={{
          width: "25%",
          border: "none",
          marginLeft: "4%",
          backgroundColor: "#1A374D",
          display: "inline-block",
        }}
      >
        <Card.Img variant="top" src={Doctor1} style={{ borderRadius: "10%" }} />
        <Card.Body>
          <Card.Title style={cardStyle}>Dr. Laurie Glimcher</Card.Title>
          <Card.Text style={cardStyle}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "25%",
          border: "none",
          marginLeft: "4%",
          backgroundColor: "#1A374D",
          display: "inline-block",
        }}
      >
        <Card.Img variant="top" src={Doctor1} style={{ borderRadius: "10%" }} />
        <Card.Body>
          <Card.Title style={cardStyle}>Dr. Laurie Glimcher</Card.Title>
          <Card.Text style={cardStyle}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "25%",
          border: "none",
          marginLeft: "4%",
          backgroundColor: "#1A374D",
          display: "inline-block",
        }}
      >
        <Card.Img variant="top" src={Doctor1} style={{ borderRadius: "10%" }} />
        <Card.Body>
          <Card.Title style={cardStyle}>Dr. Laurie Glimcher</Card.Title>
          <Card.Text style={cardStyle}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <h1
        style={{
          textAlign: "center",
          marginTop: "5%",
          paddingBottom: "3%",
          color: "#fff",
        }}
      >
        What Other Users Say <br />
        About Us
      </h1>
      <Carousel
        style={{
          textAlign: "center",
          paddingRight: "19%",
          paddingLeft: "19%",
          color: "#fff ",
        }}
      >
        <Carousel.Item interval={1000}>
          <img
            src={Paitent1}
            style={{ width: "8%", height: "8% ", borderRadius: "100%" }}
            alt="First slide"
          />

          <h3 style={hstyle}>
            “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus
            tortor donec ipsum consequat semper consequat adipiscing
            ultrices.”“Lobortis leo pretium facilisis amet nisl at nec.
            Scelerisque risus tortor donec ipsum
          </h3>
          <p style={pStyle}>James Pattinson, Heart Paitent</p>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            src={Paitent1}
            style={{ width: "8%", height: "8% ", borderRadius: "100%" }}
            alt="Second slide"
          />

          <h3 style={hstyle}>
            “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus
            tortor donec ipsum consequat semper consequat adipiscing
            ultrices.”“Lobortis leo pretium facilisis amet nisl at nec.
            Scelerisque risus tortor donec ipsum
          </h3>
          <p style={pStyle}>James Pattinson, Heart Paitent</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Paitent1}
            style={{ width: "8%", height: "8% ", borderRadius: "100%" }}
            alt="Third slide"
          />

          <h3 style={hstyle}>
            “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus
            tortor donec ipsum consequat semper consequat adipiscing
            ultrices.”“Lobortis leo pretium facilisis amet nisl at nec.
            Scelerisque risus tortor donec ipsum
          </h3>
          <p style={pStyle}>James Pattinson, Heart Paitent</p>
        </Carousel.Item>
      </Carousel>

      <Container>
        <h3
          style={{
            textAlign: "center",
            fontSize: "3rem",
            paddingTop: "10rem",
            paddingBottom: "4rem",
            borderColor: "red",
            border: "2px",
            color: "#fff",
          }}
        >
          Prepare Yourself & Get Connected <br />
          with the World Best Doctor’s
        </h3>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "200",
            paddingBottom: "6rem",
            borderColor: "red",
            border: "2px",
            color: "#fff",
          }}
        >
          {" "}
          We have some more special offer for you.
        </p>

        <div id="contact" 
        style={{
          borderColor:"#285373",
          borderStyle:"double",
          borderWidth:"4px",
          borderRadius:"20px",
              color: "#fff",
              marginLeft: "10%",
              marginTop: "1%",
              marginBottom:"8%",
              padding:"1%"
            }}>
        <h1>Mail Us Here</h1>
        <form onSubmit={handleSubmit}  style={{marginTop:"5%",display:'block',marginLeft : "5px"}}>
 <label style={{marginRight:"1%",marginBottom:"0.3%"}}>Name</label>
 <input name = "name" type="text" style = {{minWidth:"380px",width:"40%",marginRight:"5%",backgroundColor:"white",borderRadius:"2px",borderWidth:"1px"}}/>
 <label style={{marginRight:"1%",marginBottom:"0.3%"}}>Email</label>
 <input name = "usermail" type="email" style = {{minWidth:"380px",width:"40%",backgroundColor:"white",marginBottom:"1%",borderRadius:"2px",borderWidth:"1px"}}/>
 <label style={{marginRight:"1%",marginBottom:"0.3%"}}>Message</label>
 <textarea rows="8" name = "message" maxLength= "1000" placeholder="Type your message here ..." style={{minWidth:"380px",width:"80%",backgroundColor:"white",marginRight:"20%",marginBottom:"1%",borderRadius:"2px",borderWidth:"1px"}}/>
    <button type = "submit"style={{fontSize:"120%",padding : "1% 5%",backgroundColor:"#B1D0E0"
   ,borderRadius: "25px",color:"white", marginBottom:"25px"}}>Send</button>
    </form>
    </div>
      </Container>

      {/* Footer Section */}

      <Row style={{ paddingLeft: "5%", marginBottom: "2rem" }}>
        <Col>
          <h3
            style={{
              textDecoration: "none",
              color: "#B1D0E0",
              display: "inline-block",
              fontFamily: "sans-serif ",
            }}
          >
            OnlineClinic
          </h3>
          <br />
          <p style={{ color: "#fff", fontWeight: "100", lineHeight: "1.2rem" }}>
            We try to provide patient <br />& doctor a interative
            <br /> environment.
          </p>
        </Col>
        <Col>
          <h6 id="about" style={{ color: "#fff" }}>
            About
          </h6>
        </Col>
        <Col>
          <h6 id="contact" style={{ color: "#fff" }}>
            Get in Touch
          </h6>
        </Col>
      </Row>
    </div>
  );
}

export default Discover;
