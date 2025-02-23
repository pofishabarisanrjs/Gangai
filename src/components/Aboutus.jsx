import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import base from '../image/base.jpg';

function About() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col 
          md={5} 
          className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-3 mb-md-0 text-animation"
        >
          <div className="">
            <div className='fontdesign smallheading'>Lorem ipsum dolor sit amet</div>
            <div className="aboutheaddesign1 pb-2">
              Best Borewell Drilling Service in Tamil Nadu
            </div>
            <p className="fontdesign">
              The oldest classical British and Latin writings had little direction.
              Over time, text direction (left to right) became standardized. Word
              dividers and terminal punctuation became common. The first way to
              divide sentences into groups was the original paragraphos, similar
              to an underscore at the beginning of the new group. The Greek
              parágraphos evolved into the pilcrow (¶), which in English
              manuscripts in the Middle Ages can be seen inserted inline between
              sentences.
            </p>
            <div className="aboutbutton">
              <Button variant="success" className='readmore fontdesign'>Read More</Button>
            </div>
          </div>
        </Col>
        <Col md={7} className="text-center image-animation">
          <div>
            <img src={base} alt="Borewell Service" className="img-fluid rounded w-75" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
