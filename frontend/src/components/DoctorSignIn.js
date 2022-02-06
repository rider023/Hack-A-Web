import React from 'react';
import logo from '../images/logo.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from './Image';
import { Link } from 'react-router-dom';
import {
  faGoogle,
  faApple,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DoctorSignIn() {
  return (
    <div style={{ backgroundColor: '#1A374D' }}>
      <Container>
        <Row style={{ marginTop: '1%' }}>
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
          ></Col>
        </Row>
      </Container>

      <Row
        style={{
          display: 'flex',
          paddingBottom: '5%',
          marginRight: '1%',
          marginLeft: '3%',
        }}
      >
        <Col
          style={{
            marginTop: '2%',
            marginLeft: '3%',
            display: 'block',
            minWidth: '500px',
          }}
        >
          <div style={{ color: '#B1D0E0', fontSize: '300%' }}>
            Welcome Back Doctor!
          </div>
          <div
            style={{ color: '#B1D0E0', fontSize: '140%', marginBottom: '3%' }}
          >
            Don't have an account?
            <Link
              to='/SignUp'
              style={{ textDecoration: 'none', color: '#FFF89A' }}
            >
              {' '}
              Sign Up.
            </Link>
          </div>
          <form style={{ justifyContent: 'center' }}>
            <label
              style={{
                display: 'block',
                fontSize: '160%',
                color: 'white',
                marginBottom: '2%',
              }}
            >
              Username{' '}
            </label>
            <input
              type='email'
              style={{
                display: 'block',
                backgroundColor: 'white',
                width: '80%',
                marginBottom: '2%',
                height: '50px',
                borderRadius: '22px',
              }}
            />
            <label
              style={{
                display: 'block',
                fontSize: '160%',
                color: 'white',
                marginBottom: '2%',
              }}
            >
              Password{' '}
            </label>
            <input
              type='password'
              style={{
                display: 'block',
                backgroundColor: 'white',
                width: '80%',
                marginBottom: '4%',
                height: '50px',
                borderRadius: '22px',
              }}
            />
            <input type='radio' style={{ width: '8%', height: '1.5rem' }} />
            <label style={{ color: '#B1D0E0', fontSize: '140%' }}>
              Remember Me
            </label>
            <label
              style={{ color: '#B1D0E0', fontSize: '140%', marginLeft: '16%' }}
            >
              Forgot Password?
            </label>
            <Link to='/Dashboard' style={{ textDecoration: 'none' }}>
              <Button
                style={{
                  marginTop: '6%',
                  display: 'block',
                  marginBottom: '2%',
                  padding: '1% 34% ',
                  borderRadius: '22px',
                  border: 'none',
                  backgroundColor: '#406882',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <b style={{ backgroundColor: '#406882', fontSize: '150%' }}>
                  Sign In
                </b>
              </Button>
            </Link>
          </form>
          <h4 style={{ marginBottom: '3%', marginLeft: '28%', color: 'white' }}>
            or continue with
          </h4>
          <FontAwesomeIcon
            icon={faGoogle}
            style={{
              margin: '2% 10%',
              color: 'white',
              width: '8%',
              height: '6%',
            }}
          />
          <FontAwesomeIcon
            icon={faFacebook}
            style={{
              margin: '2% 10%',
              color: 'white',
              width: '8%',
              height: '6%',
            }}
          />
          <FontAwesomeIcon
            icon={faApple}
            style={{
              margin: '2% 10%',
              color: 'white',
              width: '8%',
              height: '6%',
            }}
          />
        </Col>
        <Col
          style={{ display: 'flex', justifyContent: 'center', margin: '8% 0%' }}
        >
          <Image />
        </Col>
      </Row>
    </div>
  );
}

export default DoctorSignIn;
