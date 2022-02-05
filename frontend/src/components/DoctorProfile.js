import React,{useEffect} from 'react';
import logo from "../images/logo.png";
import {Button, Col, Container,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faBell,faCalendar,faHouseUser,faRobot,faRupeeSign,faUserNurse,faUser,faMailBulk,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import doctor from "../images/doctorpic2.jpg";
function DoctorProfile() {

    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

const styles={
    textAlign:"center",
    color:"#1A374D",
    backgroundColor:"#B1D0E0",
    letterSpacing:"2px"
}
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
      <h2 style={{marginBottom:"3%",color:"#B1D0E0",marginLeft:"8%"}}><b>Doctor Detail</b></h2>
          <Row>
              <Row>
              <Col style={{  textAlign:"center"}}>
         <img src={doctor}  style={{width: "7rem", height:" 7rem",borderRadius:" 50%",overflow:" hidden",backgroundColor:"none"}} alt="img" />
         <h4 style={{paddingTop:"2%",color:"#B1D0E0"}}>Dr. Laura Alexa</h4>
         <h6 style={{color:"#B1D0E0",fontWeight:"400",marginBottom:"2%"}}>Heart Specialist</h6>
              </Col>
              </Row>
              <Row style={{marginBottom:"5%",backgroundColor:"#B1D0E0",display:"flex",width:"100%",borderRadius:"20px",padding:"1%"}}>
    
   
    <Col style={{justifyContent:"left",backgroundColor:"#B1D0E0",borderRadius:"100%"}}>
    <h5 style={styles}>Paris</h5>
    </Col >
    
    
    <Col style={{justifyContent:"center",backgroundColor:"#B1D0E0",borderRadius:"100%"}}>
    <h5 style={styles}>12 Years Experience</h5>
    </Col>
    
    
    <Col style={{justifyContent:"center",backgroundColor:"#B1D0E0",borderRadius:"100%"}}>
    <h5 style={styles}>$ 200/hrs</h5>
    </Col>
    
      
        </Row >
        <Row style={{marginLeft:"2%",marginBottom:"2%",backgroundColor:"#285373",display:"flex",width:"45%",borderRadius:"20px",padding:"1%"}}>
        
            <Col style={{backgroundColor:"#285373"}}>
        <h5 style={{backgroundColor:"#285373",color:"#B1D0E0",paddingTop:"3%",paddingBottom:"5%"}}>About</h5>
        <h7 style={{backgroundColor:"#285373",color:"#fff", lineHeight:"2rem"}}>Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum </h7>
            </Col>
        
      
        </Row>
        <Row style={{marginLeft:"4%",marginBottom:"2%",backgroundColor:"#285373",display:"flex",width:"45%",borderRadius:"20px",padding:"1%"}}>
        
        <Col style={{backgroundColor:"#285373"}}>
        <h5 style={{backgroundColor:"#285373",color:"#B1D0E0"}}>Specialties</h5>
        </Col>
    
  
    </Row>
          </Row>
      </Container>
      </Col>
      </Row>
      </Container>
  </div>;
}

export default DoctorProfile;
