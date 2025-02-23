import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sec6content1 from "./Section-6-content";
import Sec6content2 from "./Section-6-content2";
import Sec6img from "./Section-6-img";
import Sec6img2 from "./Section-6-img2";

function Section6bg() {
  return (
    <div className="section6bg">
      <div className="sec6content">
        <Container>
          <Container>
            <Row>
              <Col>
                <Container>
                  <Row>
                    <Col>
                      <Sec6content1 />
                    </Col>
                    <Col>
                      <Sec6content2 />
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col>
                <Container>
                  <Row>
                    <Col><Sec6img/></Col>
                    <Col><Sec6img2/></Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default Section6bg;
