import React from "react";
import { Button, Nav, Navbar, Col, Row, Card, Carousel,Container } from "react-bootstrap";
import logo from "../images/logo.png";
import pic from "../images/doctor.png";
import Doctor1 from "../images/doctor pic1.jpg";
import Paitent1 from "../images/person1.jpg";
import { Link } from "react-router-dom";

function Discover() {
  const navStyle = {
    paddingRight: "2em",
    fontSize: "1.2rem",
    color: "#fff",
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
  return (
    <div>
      {/* Navbar Section */}

      <Navbar bg="#1A374D" variant="dark" style={{ marginTop: "0.6rem" }}>
        <Navbar.Brand style={{ marginLeft: "5%" }}>
          <img
            src={logo}
            style={{ marginTop: "-0.4rem", width: "5rem", height: "5rem" }}
            alt="logo"
          />
          <h2
            style={{
              textDecoration: "none",
              color: "#B1D0E0",
              display: "inline-block",
              fontFamily: "sans-serif ",
            }}
          >
            OnlineClinic
          </h2>
        </Navbar.Brand>

        <Nav className="ms-auto " style={{ paddingRight: "8rem" }}>
          <Nav.Link style={navStyle} href="">
            About
          </Nav.Link>
          <Nav.Link style={navStyle} href="">
            Services
          </Nav.Link>
          <Nav.Link style={navStyle} href="">
            Pricing
          </Nav.Link>
          <Nav.Link style={navStyle} href="">
            Contact Us
          </Nav.Link>
          <Link to="/SignIn" style={{ textDecoration: "none" }}>
            <h6
              style={{
                paddingRight: "2em",
                paddingLeft: "10em",
                paddingTop: "0.5rem",
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#fff",
                backgroundColor: "#1A374D",
                border: "none",
                fontSize: "1.03rem",
              }}
            >
              SignIn
            </h6>
          </Link>
          <Link to="/SignUp">
            <Button
              style={{
                borderRadius: "2.5em",
                backgroundColor: "#6998AB",
                fontWeight: "700",
                letterSpacing: "2px",
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Nav>
      </Navbar>

      {/* Header Section */}

      <Row>
        <Col>
          <div
            style={{
              color: "#fff",
              fontSize: "4.2rem",
              marginLeft: "10%",
              marginTop: "1rem",
              fontWeight: "600",
              lineHeight: "5rem",
            }}
          >
            10,000+ best doctor’s are available for you, Go Explore{" "}
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: "1.8rem",
              marginLeft: "10%",
              fontWeight: "300",
            }}
          >
            We try to provide you best and afordable Doctor’s from all over the
            world.
          </div>
        </Col>
        <Col>
          <img
            src={pic}
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "auto",
              marginLeft: "20%",
              borderRadius: "50%",
            }}
            alt="pic"
          />
        </Col>
      </Row>

      {/* Main Section */}

      <h2
        style={{
          color: "#fff",
          fontSize: "2.4xrem",
          marginLeft: "5%",
          fontWeight: "600",
          lineHeight: "5rem",
        }}
      >
        Top Doctor’s
      </h2>
      <Card
        style={{
          width: "20rem",
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
          width: "20rem",
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
          width: "20rem",
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
          width: "20rem",
          border: "none",
          marginLeft: "4%",
          backgroundColor: "#1A374D",
          display: "inline-block",
        }}
      >
        <Card.Img variant="top" src={Doctor1} style={{ borderRadius: "10%" }} />
        <Card.Body style={{ paddingBottom: "4rem" }}>
          <Card.Title style={cardStyle}>Dr. Laurie Glimcher</Card.Title>
          <Card.Text style={cardStyle}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <h1 style={{ textAlign: "center", paddingBottom: "3rem", color: "#fff" }}>
        What Other User’s Say <br />
        About Us
      </h1>
      <Carousel
        style={{
          textAlign: "center",
          paddingRight: "18rem",
          paddingLeft: "18rem",
          color: "#fff ",
        }}
      >
        <Carousel.Item interval={1000}>
          <img
            src={Paitent1}
            style={{ width: "6rem", height: "6rem", borderRadius: "100%" }}
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
            style={{ width: "6rem", height: "6rem", borderRadius: "100%" }}
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
            style={{ width: "6rem", height: "6rem", borderRadius: "100%" }}
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
          <h6 style={{ color: "#fff" }}>About</h6>
        </Col>
        <Col>
          <h6 style={{ color: "#fff" }}>Get in Touch</h6>
        </Col>
      </Row>
    </div>
  );
}

export default Discover;
