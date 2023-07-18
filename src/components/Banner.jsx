import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";// for connecting 
import headerImg from "../images/headerimg.jpg";// randomly found it:)

export default function Banner() {


  return (
    <section className='banner' id="home">
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{`Hi I am Mirella Dimichino`}<span className='wrap'>FrontEnd Developer</span></h1>
            <p>Passionate Developer with a background in hospitality</p>
            <button onClick={() => console.log('connect')}>Lets connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header img" />

          </Col>


        </Row>


      </Container>



    </section>


  )
}
