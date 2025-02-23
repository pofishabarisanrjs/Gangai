import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sec6content1 from "./Section-6-content";
import Sec6content2 from "./Section-6-content2";
import Sec6content3 from "./Section-6-content3";
import Sec6content4 from "./Section-6-content4";
import Sec6img from "./Section-6-img";
import Sec6img2 from "./Section-6-img2";
import Sec6img3 from "./Section-6-img3";
import Sec6img4 from "./Section-6-img4";

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
                {/* <Container>
                  <Row className="mt-4">
                    <Col>
                      <Sec6content3 />
                    </Col>
                    <Col>
                      <Sec6content4 />
                    </Col>
                  </Row>
                </Container> */}
              </Col>
              <Col>
                <Container>
                  <Row>
                    <Col><Sec6img/></Col>
                    <Col><Sec6img2/></Col>
                  </Row>
                </Container>
                {/* <Container>
                  <Row className="mt-4" >
                    <Col><Sec6img3/></Col>
                    <Col><Sec6img4/></Col>
                  </Row>
                </Container> */}
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default Section6bg;
