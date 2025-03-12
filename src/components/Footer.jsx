import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css"; // Import animate.css

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="text-white py-4 section6bg fontdesign animate__animated animate__fadeInUp">
        <Container>
          <Row className="text-md-left text-center">
            {/* Quick Links (Left-Aligned) */}
            <Col md={3} className="text-md-start">
              <h5 className="animate__animated animate__fadeInLeft">
                Quick Links
              </h5>
              <ul className="list-unstyled text-white">
                <li>
                  <a
                    href="#home"
                    className="text-white text-decoration-none animate__animated animate__pulse animate__delay-1s"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#home"
                    className="text-white text-decoration-none animate__animated animate__pulse animate__delay-2s"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#home"
                    className="text-white text-decoration-none animate__animated animate__pulse animate__delay-3s"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </Col>

            {/* Support (Left-Aligned) */}
            <Col md={3} className="text-md-start text-white">
              <h5 className="animate__animated animate__fadeInLeft animate__delay-1s">
                Support
              </h5>
              <ul className="list-unstyled text-white">
                <li>
                  <a
                    href="#home"
                    className="text-white text-decoration-none animate__animated animate__pulse animate__delay-1s"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    href="#home"
                    className="text-white text-decoration-none animate__animated animate__pulse animate__delay-4s"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#home"
                    className="text-white text-decoration-none animate__animated animate__pulse animate__delay-3s"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </Col>

            {/* Address Section */}
            <Col md={3} className="text-center pb-2 text-white">
              <h5> Address</h5>
              858, G.S.T. Road, Kamaraj Nagar, Tambaram Sanatorium, Chennai, Tamil Nadu 600047
              <br />
              072999 60061
            </Col>

            {/* Location Section with Responsive iframe */}
            <Col md={3} className="text-center">
              <h5> Location</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3910.3494521698644!2d77.43336407524346!3d11.454683246316726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDI3JzE2LjgiTiA3N8KwMjYnMDkuNCJF!5e0!3m2!1sen!2sin!4v1741682026627!5m2!1sen!2sin"
                  style={{ borderRadius: "10px" }}
                  title="Location Map"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Footer Bottom Links */}
      <Container>
        <Row className="my-4 d-flex justify-content-between align-items-center">
          <Col className="text-center fontdesign fw-bold">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Gangai Borewell. All Rights Reserved.
            </p>
          </Col>
          <Col className="text-end fontdesign">
            <p className="mb-0">
              Developed by <a href="https://www.qonotech.com" target="_blank" rel="noopener noreferrer" className="text-dark fw-bold text-decoration-none">@Qono</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
