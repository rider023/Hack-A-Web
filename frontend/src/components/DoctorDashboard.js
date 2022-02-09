import React from 'react';
import logo from "../images/logo.png";
import {Button, Col, Container,Row} from 'react-bootstrap';
// import Image from './Image';
import { Link } from 'react-router-dom';
import { faBell,faCalendar,faHouseUser,faRobot,faRupeeSign,faUserNurse,faUser,faMailBulk,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from '../images/dashboardImage.png'
import docpic from '../images/doctorpic1.jpg'

function DoctorDashboard() {
  // const [route,setRoute] = useState(0); 
  
  return <Container>
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
  <Row   sm={12} md={12} xl={12} >
    <Col   sm={12} md={6} xl={3}  className='col-xl-3' style={{justifyContent:"left",marginBottom:"5%"}}>
    <div style = {{marginBottom:"8%"}}>
  <img src={logo} style = {{width:'70px',height:'60px'}}alt="img" />
</div>
    <div style={{backgroundColor:"#285373",listStyle:"none",borderStyle:'solid',borderRadius:"50px",paddingBottom:"20%",paddingTop:"12%"}}>
      <ul style={{backgroundColor:"#285373",listStyle:"none"}}>
     <Link to='/DoctorDashboard' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none",textShadow:"2px 2px 4px aliceblue"}}><FontAwesomeIcon  icon={faHouseUser} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Dashboard</li></Link>
     <Link to='/Patients' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faUserNurse} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Patients</li></Link>
     <Link to='/DoctorAppointments' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faCalendar} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Appointments</li></Link>
     <Link to='/DoctorReports' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faRobot} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Documents</li></Link>
     <Link to='/Payments' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faRupeeSign} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Payments</li></Link>
     <Link to='/Profile' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faUser} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Registration Info</li></Link>
      </ul>
      </div>
    </Col>
    
    <Col  sm={12} md={6} xl={9}>
    <h2 style={{marginBottom:"3%",color:"#B1D0E0"}}><b>DASHBOARD</b></h2>
    <Row   sm={12} md={12} xl={12}  style={{display:"flex",marginBottom:"5%"}}>
    <div style={{minWidth:"250px",marginBottom:"2%",backgroundColor:"#B1D0E0",display:"flex",width:"60%",borderRadius:"20px",padding:"3%"}}>
      <Row    sm={12} md={12} xl={12} style={{backgroundColor:"#B1D0E0",borderRadius:"20px",width:"100%",margin:"1%"}}>
      <Col style={{backgroundColor:"#B1D0E0",padding:"2%",borderRadius:"20px"}}>
      <h2 style={{backgroundColor:"#B1D0E0",color:"#1A374D"}}>Welcome Back Doctor Kanpachiro Ganoboko!</h2>
      <h4 style={{backgroundColor:"#B1D0E0",color:"#1A374D"}}>Check updates on your Patients.</h4>
      <Button style={{backgroundColor:"#6998AB",borderRadius:"20px",padding:"4% 10%",fontSize:"120%"}}>
      <Link to="/Patients" style={{backgroundColor:"#6998AB",color:"white",textDecoration:"none"}}>
          Patient List
          </Link>
          </Button>
      </Col>
      <Col className="col-md-4"  style={{backgroundColor:"#B1D0E0",borderRadius:"20px",padding:"2%"}}>
      <img src={pic} style={{backgroundColor:"#B1D0E0",width:"110%"}} alt="img" />
      </Col>
      </Row>
    </div>
    <div style={{marginLeft:"2%",marginBottom:"5%",marginTop:"5%",color:"white",minWidth:"300px",backgroundColor:"#285373",width:"36%",height:"40%",borderRadius:"20px",padding:"2%",justifyContent:"center",display:"flex"}}>
      <Row  style={{backgroundColor:"#285373",width:"100%"}}>
      <div style={{backgroundColor:"#285373",fontSize:"235%"}}>INCOME</div>
      <div style={{backgroundColor:"#285373",fontSize:"145%"}}>Total Income: 10000Rs</div>
      <Button  style={{backgroundColor:"#6998AB",borderRadius:"20px"}}>View Details</Button>
      </Row>
    </div>
    </Row>
    <Row   sm={12} md={9} xl={9} >
      <Col  style={{backgroundColor:"#285373",padding:"2%",borderRadius:"20px",marginRight:"5%",color:"#B1D0E0"}}>
       <h3 style={{backgroundColor:"#285373"}}>Recent Patients</h3>
       
      </Col>
      <Col style={{backgroundColor:"#285373",padding:"2%",borderRadius:"20px",color:"#B1D0E0"}}>
      <h3 style={{backgroundColor:"#285373"}}>Appointments</h3>
      <ul style={{backgroundColor:"#285373",color:"white",textDecoration:"none"}}>
        <li style={{backgroundColor:"#285373",marginBottom:"1%",fontSize:"130%"}}><a href="https://www.deccanherald.com/state/top-karnataka-stories/ashwath-narayan-unveils-path-breaking-oral-cancer-research-1078133.html" style={{backgroundColor:"#285373",color:"white",textDecoration:"none"}}>Oral Cancer Breakthrough</a></li>
        <li style={{backgroundColor:"#285373",marginBottom:"1%",fontSize:"130%"}}><a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html" style={{backgroundColor:"#285373",color:"white",textDecoration:"none"}}>Covid Symptoms</a></li>
        <li style={{backgroundColor:"#285373",marginBottom:"1%",fontSize:"130%"}}><a href="https://www.cancer.org/cancer/basal-and-squamous-cell-skin-cancer/treating/squamousl-cell-carcinoma.html" style={{backgroundColor:"#285373",color:"white",textDecoration:"none"}}>SCC Treatments</a></li>
        <li style={{backgroundColor:"#285373",marginBottom:"1%",fontSize:"130%"}}><a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" style={{backgroundColor:"#285373",color:"white",textDecoration:"none"}}>Healthy Diet</a></li>
        <li style={{backgroundColor:"#285373",marginBottom:"1%",fontSize:"130%"}}><a href="https://www.health.harvard.edu/staying-healthy/how-to-boost-your-immune-system" style={{backgroundColor:"#285373",color:"white",textDecoration:"none"}}>Boost Your Immunity</a></li>
      </ul>
      </Col>
    </Row>
    
    </Col>
  </Row>
</Container>
</Container>;
}

export default DoctorDashboard;