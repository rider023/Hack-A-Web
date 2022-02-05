import React from 'react';
import logo from "../images/logo.png";
import { Button, Col, Container, Row,Table} from 'react-bootstrap';


// import Image from './Image';
import { Link } from 'react-router-dom';
import { faBell,faCalendar,faHouseUser,faRobot,faRupeeSign,faUserNurse,faUser,faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Appointments() {
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginLeft:"10%"
  };
  const dataStyle={
    color:"#91BBD0",
    border:"none",
    backgroundColor:"1A374D", 
    paddingLeft:"4%",
    border:"none !important",
    borderWidth:"0px",
    boxShadow:"none"
  }
  const headingStyle={
    color:"#9C9C9C",
    border:"none !important",
    backgroundColor:"#1A374D", 
    paddingLeft:"4%",border:"none",
    borderWidth:"0px"
  }
 const appointments =[{"date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"},
{"date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"},
{"date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"},
{"date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"},
{"date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"},
{"date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"},
{"date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"},
{"date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"},
{"date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"},
{ "date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"},
{ "date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"},
{ "date":"01/11/2021", "time":"9:00 PM", "doctor":"Dr. Laura Alexander", "problem":"Heart", "status":"Scheduled"}]


  const renderAppointmentData=(appointment, index) =>

  {
    return(
      <tr style={{ backgroundColor:"1A374D",border:" none"}} key={index}>
        <td style={dataStyle}>{appointment.date}</td>
        <td style={dataStyle}>{appointment.time}</td>
        <td style={dataStyle}>{appointment.doctor}</td>
        <td style={dataStyle}>{appointment.problem}</td>
        <td style={dataStyle}>
          <Button style={{backgroundColor:"green",borderRadius:"12px"}}>
            {appointment.status}
          </Button>
        </td>

      </tr>
    )
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
  <img src={logo} style = {{width:'70px',height:'60px'}} alt="img" />
</div>
<div style={{backgroundColor:"#285373",listStyle:"none",borderStyle:'solid',borderRadius:"50px",paddingBottom:"20%",paddingTop:"12%"}}>
      <ul style={{backgroundColor:"#285373",listStyle:"none"}}>
     <Link to='/Dashboard' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faHouseUser} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Dashboard</li></Link>
     <Link to='/ConsultDoctor' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faUserNurse} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Consult Doctors</li></Link>
     <Link to='/Appointments' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none",textShadow:"2px 2px 4px aliceblue"}}><FontAwesomeIcon  icon={faCalendar} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Appointments</li></Link>
     <Link to='/DoctorAI' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faRobot} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> DoctorAI</li></Link>
     <Link to='/Payments' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faRupeeSign} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Payments</li></Link>
     <Link to='/Profile' style={{textDecoration:"none"}}> <li style={{backgroundColor:"#285373",color:"white",fontSize:"160%",marginBottom:"5%",textDecoration:"none"}}><FontAwesomeIcon  icon={faUser} size='x'style={{backgroundColor:"#285373",color:"snow"}}/> Registration Info</li></Link>
      </ul>
      </div>
    </Col>
    
    <Col>
    <Container style={{justifyContent:"center"}}>
    <h2 style={{marginBottom:"5%",color:"#B1D0E0",marginLeft:"8%"}}><b>APPOINTMENTS</b></h2>
   <Row style={styles}>
   <Table striped bordered hover style={{border:"none !important",borderWidth:"0px",backgroundColor:"#1A374D",borderColor:"#1A374D"}}>
  <thead style={{backgroundColor:"#1A374D"}}>
    <tr style={{backgroundColor:"#1A374D"}}>
      <th style={headingStyle}>Date</th>
      <th style={headingStyle}>Time</th>
      <th style={headingStyle}>Doctor</th>
      <th style={headingStyle}>Problem</th>
      <th style={headingStyle}>Status</th>
    </tr>
  </thead>
  <tbody>
   {appointments.map(renderAppointmentData)}
  </tbody>
</Table>
</Row>

      </Container>
    </Col>
  </Row>
</Container>
</div>;
}

export default Appointments;
