import React from 'react';
import logo from "../images/logo.png";
import {Button, Col, Container,Row,Form} from 'react-bootstrap';
// import Image from './Image';
import { Link } from 'react-router-dom';
import { faBell,faCalendar,faHouseUser,faRobot,faRupeeSign,faUserNurse,faUser,faMailBulk,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from '../images/dashboardImage.png'
import docpic from '../images/doctorpic1.jpg'

function NewReport() {
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
     <Link to='/Patients' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faUserNurse} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Patients</li></Link>
     <Link to='/DoctorAppointments' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faCalendar} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Appointments</li></Link>
     <Link to='/DoctorReports' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none",textShadow:"2px 2px 4px aliceblue"}}><FontAwesomeIcon  icon={faRobot} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Documents</li></Link>
     <Link to='/Payments' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faRupeeSign} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Payments</li></Link>
     <Link to='/Profile' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faUser} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Registration Info</li></Link>
      </ul>
      </div>
    </Col>
    
    <Col  sm={12} md={6} xl={9}>
    <h2 style={{marginBottom:"4%",color:"#B1D0E0"}}><b>NEW REPORT</b></h2>
    <Container>
    <Form >
    <Form.Group className="mb-5"  style={{display:"flex", justifyContent:"center"}}>
    <Form.Label  style={{color:"#B1D0E0",marginRight:"1%"}}>Patient Name: </Form.Label>
    <Form.Control type="text" placeholder="Enter Patient Name" style={{minWidth:"200px",borderRadius:"8px",width:"100%"}}/>
    </Form.Group>
     <Form.Group className="mb-5" style={{display:"flex", justifyContent:"center"}}>
    <Form.Label  style={{color:"#B1D0E0",marginRight:"1%"}}>Patient's Email: </Form.Label>
    <Form.Control type="email" placeholder="Enter Email" style={{minWidth:"200px",borderRadius:"8px",width:"100%"}}/>
     </Form.Group>
     <Form.Group className="mb-5" style={{display:"flex", justifyContent:"center"}}>
    <Form.Label  style={{color:"#B1D0E0",marginRight:"1%"}}>Prescriptions: </Form.Label>
    <Form.Control type="text" placeholder="Enter Prescriptions" style={{minWidth:"200px",borderRadius:"8px",width:"100%"}}/>
     </Form.Group>
     <Form.Group className="mb-5"  style={{display:"flex"}}>
    <Form.Label  style={{color:"#B1D0E0",marginRight:"2%"}}>Age: </Form.Label>
    <Form.Control type="number" placeholder="Enter Age" style={{minWidth:"300px",marginRight:"2%",borderRadius:"8px",width:"100%"}}/>
    <Form.Label  style={{color:"#B1D0E0",marginRight:"2%"}}>Gender: </Form.Label>
    <Form.Control type="text" placeholder="Enter Gender" style={{minWidth:"300px",borderRadius:"8px",width:"100%"}}/>
    </Form.Group>
    <Form.Group className="mb-5" style={{display:"flex", justifyContent:"center"}}>
    <Form.Label  style={{color:"#B1D0E0",marginRight:"1%"}}>Symptoms: </Form.Label>
    <Form.Control type="text" placeholder="Enter Symptoms" style={{minWidth:"200px",borderRadius:"8px",width:"100%"}}/>
     </Form.Group>
      <Button style={{marginLeft:"40%",backgroundColor:"#6998AB",padding:"1% 6%",borderRadius:"19px",borderColor:"transparent"}}>Save</Button>
      </Form>
      </Container>
    </Col>
  </Row>
</Container>
</Container>;
}

export default NewReport;