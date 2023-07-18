import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Skill1 from "../images/htmlimg.png";
import Skill2 from "../images/javascriptimg.png";
import Skill3 from "../images/cssimg.png";

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id="skills">
        <Container>
        <Row>
            <Col>
            <div className='skill-bx'>
                <h2 className='align-items-center'>
                    Skills
                </h2>
                <p> My skills as Developer </p>
                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                    <div className='item'>
                        <img src={Skill1} alt="image"/>

                    </div>
                    <div className='item'>
                        <img src={Skill2} alt="image"/>

                    </div>
                    <div className='item'>
                        <img src={Skill3} alt="image"/>

                    </div>
                </Carousel>
            </div>
            </Col>
        </Row>
        </Container>


    </section>
      
  
  )
}
