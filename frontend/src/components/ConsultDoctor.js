import React from "react";
import logo from "../images/logo.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import doctor from "../images/doctorpic1.jpg";
import { Link } from "react-router-dom";
import {
  faBell,
  faCalendar,
  faHouseUser,
  faRobot,
  faRupeeSign,
  faUserNurse,
  faUser,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ConsultDoctor() {

  const boxStyle = {
    minWidth: "200px",
    marginBottom: "2%",
    backgroundColor: "#B1D0E0",
    display: "flex",
    width: "40%",
    height:"auto",
    borderRadius: "20px",
    padding: "1%",
    paddingTop:"2%",
    paddingRight:"2%",
    marginLeft:"10%",
  };
  const boxCategoryStyle = {
    minWidth: "200px",
    marginBottom: "2%",
    backgroundColor: "#6998AB",
    display: "flex",
    width: "25%",
    height:"auto",
    borderRadius: "35px",
    padding: "1%",
   marginLeft:"9.6%",
    paddingTop:"2%",
    paddingRight:"2%",
   
    
  };
  const ratedDoctorStyle=
    {minWidth: "200px",display: "flex",width: "45%",height:"auto",borderRadius: "25px",padding: "2%",paddingTop:"2%",marginLeft:"6%",background: "#285373",justifyContent:"center",marginBottom:"2%"}
  
  return (
   
  <div>
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
              <h2
                style={{
                  marginBottom: "1%",
                  color: "#B1D0E0",
                  marginLeft: "1%",
                }}
              >
                <b>CONSULT OUR DOCTORS</b>
              </h2>

                {/* Top Section */}

              <Row
                style={{ minWidth:"300px",display: "flex" ,marginBottom:"0%", marginTop: "3%",justifyContent:"center" }}
              >
                <Row style={boxStyle}>
                <Col style={{backgroundColor: "#B1D0E0",borderRadius:"50%",}}>
               
                    <h2 style={{backgroundColor: "#B1D0E0",color:"#1A374D",}}>Dr. Laura Alexander</h2>
                    <h5 style={{backgroundColor: "#B1D0E0",color:"#1A374D",fontWeight:"500"}}>Heart Specialist</h5>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"2%",marginBottom:"3%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"140%"}}>Message</Button>
                </Col>
                <Col style={{backgroundColor: "#B1D0E0"}}>
                <img src={doctor}  style={{backgroundColor: "#B1D0E0",marginLeft:"-15%",borderRadius:"30px",paddingLeft:"5%",width:"125%",height:"180px"}} alt="img" />
                </Col >
                </Row>
                <Row style={boxStyle}>
                <Col style={{backgroundColor: "#B1D0E0",borderRadius:"50%",}}>
               
                    <h2 style={{backgroundColor: "#B1D0E0",color:"#1A374D",}}>Dr. Laura Alexander</h2>
                    <h5 style={{backgroundColor: "#B1D0E0",color:"#1A374D",fontWeight:"500"}}>Heart Specialist</h5>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"2%",marginBottom:"3%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"140%"}}>Message</Button>
                </Col>
                <Col style={{backgroundColor: "#B1D0E0"}}>
                <img src={doctor}  style={{backgroundColor: "#B1D0E0",marginLeft:"-15%",borderRadius:"30px",paddingLeft:"5%",width:"125%",height:"180px"}} alt="img" />
                </Col >
                </Row>
       

                {/* Categories Section */}
                

                <Row style={{ justifyContent:"center",display:"flex"}}>
                  <Row>
                    <Col>
                    <h3 style={{
                  color: "#B1D0E0",
                  marginLeft: "1%",paddingTop:"6%",marginBottom:"6%"}}>Categories</h3>
                    </Col>
                    <Col style={{textAlign:"right",marginTop:"5%"}}>
                      <Link to="/Categories" style={{textDecoration:"none"}}>
                    <h6 style={{color:"#B1D0E0"}} >More</h6>
                    </Link>
                    </Col>
                  </Row>
                
                   <Row style={boxCategoryStyle}>
                <Col style={{backgroundColor: "#6998AB",borderRadius:"50%",paddingBottom:"40%"}}>
               
                    <h3 style={{backgroundColor: "#6998AB",color:"#1A374D",fontWeight:"400"}}>Brain Specialist</h3>
                   
                   </Col>
                   
                </Row>
                <Row style={boxCategoryStyle}>
                <Col style={{backgroundColor: "#6998AB",borderRadius:"50%",paddingBottom:"40%"}}>
               
                    <h3 style={{backgroundColor: "#6998AB",color:"#1A374D",fontWeight:"400"}}>Heart Specialist</h3>
                   
                   </Col>
                  
                </Row>
                <Row style={boxCategoryStyle}>
                <Col style={{backgroundColor: "#6998AB",borderRadius:"50%",paddingBottom:"40%"}}>
               
                    <h3 style={{backgroundColor: "#6998AB",color:"#1A374D",fontWeight:"400"}}>Eye Specialist</h3>
                   
                   </Col>
                  
                </Row>
                </Row>

                {/* Top Rated Doctor Section */}
                <Row style={{ justifyContent:"center"}}>
                  <Row>
                    <Col>
                    <h3 style={{
                  color: "#B1D0E0",
                  marginLeft: "1%",paddingTop:"6%",marginBottom:"5%"}}>Top Rated Doctor's</h3>
                    </Col>
                    <Col style={{textAlign:"right",marginTop:"5%"}}>
                    <Link to="/ConsultDoctor/Doctors" style={{textDecoration:"none"}}>
                    <h6 style={{color:"#B1D0E0"}} >More</h6>
                    </Link>
                    </Col>
                  </Row>
               
                   <Row style={  ratedDoctorStyle}>
                   <Col style={{background: "#285373"}}>
                   <img src={doctor}  style={{background: "#285373",borderRadius:"15px",paddingLeft:"5%",width:"70%",height:"110px"}} alt="img" />
                   </Col >
                   
                   <Col style={{background: "#285373",paddingRight:"10%"}}>
                   <h5 style={{backgroundColor: "#285373", color: "#B1D0E0",marginLeft:"-30%"}}>Dr. Laura Alexander</h5>
                    <h6 style={{backgroundColor: "#285373", color: "#B1D0E0",fontWeight:"400",marginLeft:"-30%"}}>Heart Specialist</h6>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"8%",marginBottom:"3%",marginLeft:"-30%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"100%"}}>Message</Button>
                   </Col>
                  </Row>
                  <Row style={ratedDoctorStyle}>
                   <Col style={{background: "#285373"}}>
                   <img src={doctor}  style={{background: "#285373",borderRadius:"15px",paddingLeft:"5%",width:"70%",height:"110px"}} alt="img" />
                   </Col >
                   
                   <Col style={{background: "#285373",paddingRight:"10%"}}>
                   <h5 style={{backgroundColor: "#285373", color: "#B1D0E0",marginLeft:"-30%"}}>Dr. Laura Alexander</h5>
                    <h6 style={{backgroundColor: "#285373", color: "#B1D0E0",fontWeight:"400",marginLeft:"-30%"}}>Heart Specialist</h6>
                    <Button style={{backgroundColor:"#1A374D",color:"#B1D0E0", marginTop:"8%",marginBottom:"3%",marginLeft:"-30%",borderRadius:"10px",textAlign:"center",paddingRight:"10%",paddingLeft:"10%",fontSize:"100%"}}>Message</Button>
                   </Col>
                  </Row>
                 </Row>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ConsultDoctor;
