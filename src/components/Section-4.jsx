import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button4 from "./Section4button";

function Section4bg() {
  return (
    <div className="section4bg">
      <Container>
        <Row>
          <Col>
          <div className='text-center headingcss fontdesign pt-5 pb-4'>
          Our Recent Work</div>
            <div className="sec-4-heading">
              <div className="section-details">
             <p className="fontdesign text-center"> Game Changer is a 2025 Indian Telugu-language politican action film directed by S. Shankar, in his Telugu debut, and
                    produced by Dil Raju under Sri Venkateswara Creations.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="button-sec4 p-2">
        <Button4/>
      </div>
    </div>
  );
}

export default Section4bg;
