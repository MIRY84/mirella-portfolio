import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";// for connecting 
import headerImg from "../images/headerimg.jpg";// randomly found it:)

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);//inizializing loops
  const [isDeleting, setIsDeleting] = useState(false);//animation on letters
  const toRotate = ["Web developer", "FrontEnd"];
  const [text, setText] = useState ('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => {clearInterval(ticker)};

  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

    setText(updatedText);
    if (isDeleting){
      setDelta(prevDelta=> prevDelta /2)
    }

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    } else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum+1);
      setDelta(500);
    }
  }




  return (
    <section className='banner' id="home">
      <Container>
        <Row className='align-items-center'>
          <Col xs={9} >
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{`Hi I am Mirella Dimichino`}<span className='wrap'>{text}</span></h1>
            <p>Passionate Developer with a background in hospitality</p>
            <button onClick={() => console.log('connect')}>Lets connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={3} >
            <img src={headerImg} alt="header img" />

          </Col>


        </Row>


      </Container>



    </section>


  )
}
