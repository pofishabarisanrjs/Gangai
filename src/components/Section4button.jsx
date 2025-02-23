import React, { useState } from 'react';
import { Container, Tab, Tabs, Modal, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'animate.css';
import base2 from '../image/base2.jpg';

function Button4() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const renderImages = () => (
    <Row className="g-5 animate__animated animate__fadeIn">
      {[...Array(9)].map((_, index) => (
        <Col xs={12} md={4} key={index}>
          <img
            src={base2}
            className="rounded w-100 cursor-pointer animate__animated animate__zoomIn"
            alt=""
            onClick={() => handleShow(base2)}
            style={{ cursor: 'pointer', transition: 'transform 0.3s' }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </Col>
      ))}
    </Row>
  );

  return (
    <div className='tab'>
      <Container>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          id="justify-tab-example"
          className="mb-5 custom-tabs mx-auto tabdesign animate__animated animate__fadeIn"
          justify
        >
          <Tab eventKey="home" title="Chennai"> <Container>{renderImages()}
          <div className=" tabbutton"><Container>
      <Row>
        <Col>
        <Button variant="success" className='readmore fontdesign'>Read More</Button>
        </Col>
      </Row>
    </Container></div>
            </Container> </Tab>
          <Tab eventKey="profile" title="Madurai"> <Container>{renderImages()}</Container> </Tab>
          <Tab eventKey="longer" title="Trichy"> <Container>{renderImages()}</Container> </Tab>
          <Tab eventKey="contact" title="Contact"> <Container>{renderImages()}</Container> </Tab>
        </Tabs>
      </Container>

      {/* Modal with animation */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        className="animate__animated animate__zoomIn"
      >
        <Modal.Body className="text-center">
          {selectedImage && <img src={selectedImage} className="w-100" alt="Full Screen" />}
        </Modal.Body>
       
      </Modal>
    </div>
  );
}

export default Button4;
