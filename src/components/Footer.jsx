import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "animate.css"; // Import animate.css
import base2 from '../image/base2.jpg';

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="text-white py-4 section6bg fontdesign animate__animated animate__fadeInUp">
        <Container>
          <Row className="text-md-left text-center">
            {/* Quick Links (Left-Aligned) */}
            <Col md={3} className="text-md-start">
              <h5 className="animate__animated animate__fadeInLeft">Quick Links</h5>
              <ul className="list-unstyled text-white">
                <li><a href="#" className="text-white text-decoration-none animate__animated animate__pulse animate__delay-1s">Home</a></li>
                <li><a href="#" className="text-white text-decoration-none animate__animated animate__pulse animate__delay-2s">Services</a></li>
                <li><a href="#" className="text-white text-decoration-none animate__animated animate__pulse animate__delay-3s">About Us</a></li>
                <li><a href="#" className="text-white text-decoration-none animate__animated animate__pulse animate__delay-4s">Privacy Policy</a></li>
              </ul>
            </Col>

            {/* Support (Left-Aligned) */}
            <Col md={3} className="text-md-start text-white">
              <h5 className="animate__animated animate__fadeInLeft animate__delay-1s">Support</h5>
              <ul className="list-unstyled text-white">
                <li><a href="#" className="text-white text-decoration-none animate__animated animate__pulse animate__delay-1s">FAQs</a></li>
                <li><a href="#" className="text-white text-decoration-none animate__animated animate__pulse animate__delay-2s">Help Center</a></li>
                <li><a href="#" className="text-white text-decoration-none animate__animated animate__pulse animate__delay-3s">Terms & Conditions</a></li>
                <li><a href="#" className="text-white text-decoration-none animate__animated animate__pulse animate__delay-4s">Contact Support</a></li>
              </ul>
            </Col>

            {/* Dummy Image 1 */}
            <Col md={3} className="text-center pb-2">
              <img src={base2} alt="Dummy 1" className="img-fluid rounded animate__animated animate__fadeInRight" />
            </Col>

            {/* Dummy Image 2 */}
            <Col md={3} className="text-center">
              <img src={base2} alt="Dummy 2" className="img-fluid rounded animate__animated animate__fadeInRight animate__delay-1s" />
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Footer Bottom Links */}
      <Container>
        <Row className="my-4">
          <Col className="text-center fontdesign fw-bold">
            <a href="/privacy-policy" className="text-decoration-none text-dark animate__animated animate__fadeInUp">Privacy</a> - 
            <a href="/terms-of-use" className="text-decoration-none text-dark animate__animated animate__fadeInUp animate__delay-1s"> Terms For Us</a> - 
            <a href="/site-map" className="text-decoration-none text-dark animate__animated animate__fadeInUp animate__delay-2s"> Site Map</a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
