import React from 'react';
import logo from "../images/logo.png";
import {Button, Col, Container,Row,Table} from 'react-bootstrap';
// import Image from './Image';
import { Link } from 'react-router-dom';
import { faBell,faCalendar,faHouseUser,faRobot,faRupeeSign,faUserNurse,faUser,faMailBulk,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from '../images/dashboardImage.png'
import docpic from '../images/doctorpic1.jpg'

function Patients() {
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
     <Link to='/DoctorDashboard' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faHouseUser} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Dashboard</li></Link>
     <Link to='/Patients' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none",textShadow:"2px 2px 4px aliceblue"}}><FontAwesomeIcon  icon={faUserNurse} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Patients</li></Link>
     <Link to='/DoctorAppointments' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faCalendar} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Appointments</li></Link>
     <Link to='/DoctorReports' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faRobot} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Documents</li></Link>
     <Link to='/Payments' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faRupeeSign} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Payments</li></Link>
     <Link to='/Profile' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faUser} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Registration Info</li></Link>
      </ul>
      </div>
    </Col>
    
    <Col  sm={12} md={6} xl={9}>
    <h2 style={{marginBottom:"4%",color:"#B1D0E0"}}><b>PATIENTS</b></h2>
    <Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>Disease</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry </td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </Col>
  </Row>
</Container>
</Container>;
}

export default Patients;