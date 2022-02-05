import React,{useEffect} from 'react';
import logo from "../images/logo.png";
import {Button, Col, Container,Row} from 'react-bootstrap';
import doctor from "../images/doctorpic1.jpg";
import { Link } from 'react-router-dom';
import { faBell,faCalendar,faHouseUser,faRobot,faRupeeSign,faUserNurse,faUser,faMailBulk,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Dashboard() {

  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const boxStyle = {
    minWidth: "200px",
    marginBottom: "2%",
    backgroundColor: "#B1D0E0",
    display: "flex",
    width: "24%",
    height:"auto",
    borderRadius: "20px",
    
    paddingTop:"2%",
    
    marginLeft:"5%",
  };

  return <div>
  <Container style={{marginBottom:"3%"}}>
  <Row style = {{marginTop:"1%"}}>
    <Col style = {{display:"flex",justifyContent:"left"}}>
    <div style = {{marginLeft:"5%"}}>
  <img src={logo} style = {{width:'100px',height:'90px'}} alt="img" />
</div>
  <div style = {{paddingTop:"3.7%",textDecoration:"none"}}><Link to='/' style = {{textDecoration:"none",color:"#B1D0E0"}}><h2 style = {{fontFamily:"sans-serif "}}>OnlineClinic</h2></Link></div>
    </Col>
    <Col style = {{paddingTop:"2%",display:"flex",justifyContent:"right"}}>
    <FontAwesomeIcon icon={faMailBulk} size='2x'style={{color:"snow",marginRight:"2%"}}/>
    <FontAwesomeIcon icon={faBell} size='2x'style={{color:"snow"}}/>
    </Col>
  </Row>
</Container>
<Container style={{marginBottom:"8%"}}>
  <Row>
    <Col className='col-xl-3' style={{justifyContent:"left",marginBottom:"5%"}}>
    <div style = {{marginBottom:"8%"}}>
  <img src={logo} style = {{width:'70px',height:'60px'}}alt="img" />
</div>
    <div style={{backgroundColor:"#285373",listStyle:"none",borderStyle:'solid',borderRadius:"50px",paddingBottom:"20%",paddingTop:"12%"}}>
      <ul style={{backgroundColor:"#285373",listStyle:"none"}}>
     <Link to='/Dashboard' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faHouseUser} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Dashboard</li></Link>
     <Link to='/ConsultDoctor' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none",textShadow:"2px 2px 4px aliceblue"}}><FontAwesomeIcon  icon={faUserNurse} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Consult Doctors</li></Link>
     <Link to='/Appointments' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faCalendar} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Appointments</li></Link>
     <Link to='/DoctorAI' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faRobot} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> DoctorAI</li></Link>
     <Link to='/Payments' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faRupeeSign} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Payments</li></Link>
     <Link to='/Profile' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faUser} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Registration Info</li></Link>
      </ul>
      </div>
    </Col>
    
    <Col>
    <Container>
    <h2 style={{marginBottom:"3%",color:"#B1D0E0",marginLeft:"8%"}}><b>Doctor's</b></h2>
    <Row
                style={{ display: "flex" ,marginBottom:"0%", marginTop: "3%",justifyContent:"center" }}
              >
                <Row style={boxStyle}>
                <Col style={{backgroundColor: "#B1D0E0",borderRadius:"50%",textAlign:"center"}}>
                <img src={doctor}  style={{backgroundColor: "#B1D0E0",borderRadius:"100%",width:"60%",height:"96px"}} alt="img" />
                    <h5 style={{backgroundColor: "#B1D0E0",color:"#1A374D",paddingTop:"2%"}}>Dr. Laura Alexa</h5>
                    <h6 style={{backgroundColor: "#B1D0E0",color:"#1A374D",fontWeight:"400"}}>Heart Specialist</h6>
                    <div style={{backgroundColor: "#B1D0E0"}}><FontAwesomeIcon icon={faEnvelope} style={{backgroundColor:"#B1D0E0",}}/>
                    </div>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"2%",marginBottom:"3%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"100%"}}>Book Appointment</Button>
                </Col>
                </Row>

                <Row style={boxStyle}>
                <Col style={{backgroundColor: "#B1D0E0",borderRadius:"50%",textAlign:"center"}}>
                <img src={doctor}  style={{backgroundColor: "#B1D0E0",borderRadius:"100%",width:"60%",height:"96px"}} alt="img" />
                    <h5 style={{backgroundColor: "#B1D0E0",color:"#1A374D",paddingTop:"2%"}}>Dr. Laura Alexa</h5>
                    <h6 style={{backgroundColor: "#B1D0E0",color:"#1A374D",fontWeight:"400"}}>Heart Specialist</h6>
                    <div style={{backgroundColor: "#B1D0E0"}}><FontAwesomeIcon icon={faEnvelope} style={{backgroundColor:"#B1D0E0",}}/>
                    </div>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"2%",marginBottom:"3%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"100%"}}>Book Appointment</Button>
                </Col>
                </Row>

                <Row style={boxStyle}>
                <Col style={{backgroundColor: "#B1D0E0",borderRadius:"50%",textAlign:"center"}}>
                <img src={doctor}  style={{backgroundColor: "#B1D0E0",borderRadius:"100%",width:"60%",height:"96px"}} alt="img" />
                    <h5 style={{backgroundColor: "#B1D0E0",color:"#1A374D",paddingTop:"2%"}}>Dr. Laura Alexa</h5>
                    <h6 style={{backgroundColor: "#B1D0E0",color:"#1A374D",fontWeight:"400"}}>Heart Specialist</h6>
                    <div style={{backgroundColor: "#B1D0E0"}}><FontAwesomeIcon icon={faEnvelope} style={{backgroundColor:"#B1D0E0",}}/>
                    </div>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"2%",marginBottom:"3%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"100%"}}>Book Appointment</Button>
                </Col>
                </Row>

                <Row style={boxStyle}>
                <Col style={{backgroundColor: "#B1D0E0",borderRadius:"50%",textAlign:"center"}}>
                <img src={doctor}  style={{backgroundColor: "#B1D0E0",borderRadius:"100%",width:"60%",height:"96px"}} alt="img" />
                    <h5 style={{backgroundColor: "#B1D0E0",color:"#1A374D",paddingTop:"2%"}}>Dr. Laura Alexa</h5>
                    <h6 style={{backgroundColor: "#B1D0E0",color:"#1A374D",fontWeight:"400"}}>Heart Specialist</h6>
                    <div style={{backgroundColor: "#B1D0E0"}}><FontAwesomeIcon icon={faEnvelope} style={{backgroundColor:"#B1D0E0",}}/>
                    </div>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"2%",marginBottom:"3%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"100%"}}>Book Appointment</Button>
                </Col>
                </Row>

                <Row style={boxStyle}>
                <Col style={{backgroundColor: "#B1D0E0",borderRadius:"50%",textAlign:"center"}}>
                <img src={doctor}  style={{backgroundColor: "#B1D0E0",borderRadius:"100%",width:"60%",height:"96px"}} alt="img" />
                    <h5 style={{backgroundColor: "#B1D0E0",color:"#1A374D",paddingTop:"2%"}}>Dr. Laura Alexa</h5>
                    <h6 style={{backgroundColor: "#B1D0E0",color:"#1A374D",fontWeight:"400"}}>Heart Specialist</h6>
                    <div style={{backgroundColor: "#B1D0E0"}}><FontAwesomeIcon icon={faEnvelope} style={{backgroundColor:"#B1D0E0",}}/>
                    </div>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"2%",marginBottom:"3%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"100%"}}>Book Appointment</Button>
                </Col>
                </Row>

                <Row style={boxStyle}>
                <Col style={{backgroundColor: "#B1D0E0",borderRadius:"50%",textAlign:"center"}}>
                <img src={doctor}  style={{backgroundColor: "#B1D0E0",borderRadius:"100%",width:"60%",height:"96px"}} alt="img" />
                    <h5 style={{backgroundColor: "#B1D0E0",color:"#1A374D",paddingTop:"2%"}}>Dr. Laura Alexa</h5>
                    <h6 style={{backgroundColor: "#B1D0E0",color:"#1A374D",fontWeight:"400"}}>Heart Specialist</h6>
                    <div style={{backgroundColor: "#B1D0E0"}}><FontAwesomeIcon icon={faEnvelope} style={{backgroundColor:"#B1D0E0",}}/>
                    </div>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"2%",marginBottom:"3%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"100%"}}>Book Appointment</Button>
                </Col>
                </Row>

                <Row style={boxStyle}>
                <Col style={{backgroundColor: "#B1D0E0",borderRadius:"50%",textAlign:"center"}}>
                <img src={doctor}  style={{backgroundColor: "#B1D0E0",borderRadius:"100%",width:"60%",height:"96px"}} alt="img" />
                    <h5 style={{backgroundColor: "#B1D0E0",color:"#1A374D",paddingTop:"2%"}}>Dr. Laura Alexa</h5>
                    <h6 style={{backgroundColor: "#B1D0E0",color:"#1A374D",fontWeight:"400"}}>Heart Specialist</h6>
                    <div style={{backgroundColor: "#B1D0E0"}}><FontAwesomeIcon icon={faEnvelope} style={{backgroundColor:"#B1D0E0",}}/>
                    </div>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"2%",marginBottom:"3%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"100%"}}>Book Appointment</Button>
                </Col>
                </Row>

                <Row style={boxStyle}>
                <Col style={{backgroundColor: "#B1D0E0",borderRadius:"50%",textAlign:"center"}}>
                <img src={doctor}  style={{backgroundColor: "#B1D0E0",borderRadius:"100%",width:"60%",height:"96px"}} alt="img" />
                    <h5 style={{backgroundColor: "#B1D0E0",color:"#1A374D",paddingTop:"2%"}}>Dr. Laura Alexa</h5>
                    <h6 style={{backgroundColor: "#B1D0E0",color:"#1A374D",fontWeight:"400"}}>Heart Specialist</h6>
                    <div style={{backgroundColor: "#B1D0E0"}}><FontAwesomeIcon icon={faEnvelope} style={{backgroundColor:"#B1D0E0",}}/>
                    </div>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"2%",marginBottom:"3%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"100%"}}>Book Appointment</Button>
                </Col>
                </Row>

                <Row style={boxStyle}>
                <Col style={{backgroundColor: "#B1D0E0",borderRadius:"50%",textAlign:"center"}}>
                <img src={doctor}  style={{backgroundColor: "#B1D0E0",borderRadius:"100%",width:"60%",height:"96px"}} alt="img" />
                    <h5 style={{backgroundColor: "#B1D0E0",color:"#1A374D",paddingTop:"2%"}}>Dr. Laura Alexa</h5>
                    <h6 style={{backgroundColor: "#B1D0E0",color:"#1A374D",fontWeight:"400"}}>Heart Specialist</h6>
                    <div style={{backgroundColor: "#B1D0E0"}}><FontAwesomeIcon icon={faEnvelope} style={{backgroundColor:"#B1D0E0",}}/>
                    </div>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"2%",marginBottom:"3%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"100%"}}>Book Appointment</Button>
                </Col>
                </Row>

                
                
                </Row>
    </Container>
    </Col>
  </Row>
</Container>
</div>;
}

export default Dashboard;