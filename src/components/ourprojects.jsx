import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import base1 from '../image/base1.png';

function OurProject() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const projects = [
    { title: 'Chennai', imgSrc: base1, description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'Madurai', imgSrc: base1, description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'Trichy', imgSrc: base1, description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' }
  ];

  return (
    <Row className="row-gap-3 px-md-5">
      {projects.map((project, index) => (
        <Col key={index} md={4}>
          <Card 
            className={`border-0 ${hoverIndex === index ? 'shadow-lg' : 'shadow-sm'} transition`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{ transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out', transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)' }}
          >
            <img src={project.imgSrc} alt='' width='100%' />
            <Card.Body>
              <Card.Title className="text-center">{project.title}</Card.Title>
              <Card.Text className="text-center">
                <p className="fontdesign text-center">{project.description}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default OurProject;
