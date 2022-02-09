import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Categories() {
    const arr=[{
        title:"Cardiologists",
        description:"They’re experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat.",
        id:"Heart"
    },{
        title:"Immunologists",
        description:"They treat immune system disorders such as asthma, eczema, food allergies, insect sting allergies, and some autoimmune diseases.",
        id:"Immune"
    },{
        title:"Dermatologists",
        description:"Have problems with your skin, hair, nails? Do you have moles, scars, acne, or skin allergies? Dermatologists can help.",
        id:"Skin"
    },{
        title:"Physicians",
        description:"They do routine checkups and screening tests, give you flu and immunization shots, and manage diabetes and other ongoing medical conditions.",
        id:"PD"
    },{
        title:"Gastroenterologists",
        description:"They’re specialists in digestive organs, including the stomach, bowels, pancreas, liver, and gallbladder. You might see them for abdominal pain, ulcers, diarrhea, jaundice, or cancers in your digestive organs. They also do a colonoscopy and other tests for colon cancer.",
        id:"Gas"
    },{
        title:"Hematologists",
        description:"These are specialists in diseases of the blood, spleen, and lymph glands, like sickle cell disease, anemia, hemophilia, and leukemia.",
        id:"blood"
    },{
        title:"Neurologists",
        description:"These are specialists in the nervous system, which includes the brain, spinal cord, and nerves. They treat strokes, brain and spinal tumors, epilepsy, Parkinson's disease, and Alzheimer's disease.",
        id:"nerves"
    },{
        title:"Oncologists",
        description:"These internists are cancer specialists. They do chemotherapy treatments and often work with radiation oncologists and surgeons to care for someone with cancer.",
        id:"cancer"
    },{
        title:"Pediatricians",
        description:"They care for children from birth to young adulthood. Some pediatricians specialize in pre-teens and teens, child abuse, or children's developmental issues.",
        id:"Kids"
    },{
        title:"Psychiatrists",
        description:"These doctors work with people with mental, emotional, or addictive disorders. They can diagnose and treat depression, schizophrenia, substance abuse, anxiety disorders, and sexual and gender identity issues. Some psychiatrists focus on children, adolescents, or the elderly.",
        id:"psychic"
    },{
        title:"Radiologists",
        description:"They use X-rays, ultrasound, and other imaging tests to diagnose diseases. They can also specialize in radiation oncology to treat conditions like cancer.",
        id:"Radio"
    },{
        title:"Ophthalmologists",
        description:" An ophthalmologist is a physician who specializes in Eye care.Ophthalmologists typically provide specialty eye care - medical and surgical. Ophthalmologists may also participate in academic research for eye disorders.",
        id:"Eye"
    }];
    const display = arr.map((cat)=>{
        return <Col key={cat.id} sm={12} md={6} xl={3} style={{marginRight:"5%",borderRadius:"20px"}} >
         <Card style={{ width: '115%', height: '20rem',marginBottom:"10%",borderRadius:"20px"}}>
                 <Card.Body style={{backgroundColor: '#B1D0E0',minWidth:"150px",borderRadius:"20px"}}>
                     <Card.Title style={{backgroundColor: '#B1D0E0',minWidth:"250px",fontSize:"200%",color:"white"}}>{cat.title}</Card.Title>
                     <Card.Text style={{backgroundColor: '#B1D0E0',minWidth:"250px",fontSize:"100%",color:"white"}}>{cat.description}</Card.Text>
                     </Card.Body>
                     </Card>
                     </Col>
    });
  return <div style={{ backgroundColor: '#1A374D' }}>
  <Container>
    <Row style={{ marginTop: '1%',marginBottom:"3%" }}>
      <Col style={{ display: 'flex', justifyContent: 'left' }}>
        <div style={{ marginLeft: '5%' }}>
          <img src={logo} style={{ width: '100px', height: '90px' }} />
        </div>
        <div style={{ paddingTop: '3.7%', textDecoration: 'none' }}>
          <Link to='/' style={{ textDecoration: 'none', color: '#B1D0E0' }}>
            <h2 style={{ fontFamily: 'sans-serif ' }}>OnlineClinic</h2>
          </Link>
        </div>
      </Col>
      <Col
        style={{
          paddingTop: '2%',
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        <div
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "4%",
              }}
            >
              <Link to="/Dashboard" style={{ textDecoration: "none" }}>
              <h4 style={{color: "white", fontFamily: "sans-serif " }}>Dashboard</h4>
              </Link>
            </div>
      </Col>
    </Row>
    </Container>
    <Container style={{marginRight:"1%"}}>
    <h1 style={{ textDecoration: 'none', color: '#B1D0E0',marginBottom:"5%" }}>Find your doctor by category:</h1>
    <Row  className='d-flex align-items-center justify-content-center' style={{marginRight:"5%",marginBottom:"5%"}}>
    {display}</Row>
  </Container>
  </div>
}

export default Categories;
