import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import drilling from "../image/drilling.svg";
import drill from "../image/drill.svg";
import well from "../image/well.svg";
import "animate.css";

function Outcontent() {
  return (
    <Container>
      <div className="fontdesign ">
        <Row className="g-0">
          <Col  md={4} >
            <div className="out1 pt-5  text-center animate__animated animate__fadeInLeft">
              <Card.Img
                variant="left"
                src={drill}
                width="110px"
                height="110px"
                rounded
                className="rotate-img mb-4"  // Rotating image
              
              />
              <div className="pt-1  text-white fw-bolder animate__animated animate__zoomIn">
                10 inch
              </div>
              <Card.Text className="text-white animate__animated animate__fadeInUp">
                <h5 className="px-4 ">Successfully completed project</h5>
                <p className="px-4 pt-2">
                  Some quick example text to build on the card title and make up the bulk
                </p>
              </Card.Text>
            </div>
          </Col>

          <Col  md={4} >
            <div className="out2 pt-5 text-center animate__animated animate__fadeInUp">
              <Card.Img
                variant="left"
                src={drilling}
                width="110"
                height="110"
                rounded
                className="rotate-img mb-4"
              />
              <div className=" pt-1 text-white fw-bolder animate__animated animate__zoomIn">
                12 inch
              </div>
              <Card.Text className="text-white animate__animated animate__fadeInUp">
                <h5 className="px-4">Successfully completed project</h5>
                <p className="px-4 pt-2">
                  Some quick example text to build on the card title and make up the bulk
                </p>
              </Card.Text>
            </div>
          </Col>

          <Col  md={4}>
            <div className="out3 pt-5 text-center animate__animated animate__fadeInRight">
              <Card.Img
                variant="left"
                src={well}
                width="110"
                height="110"
                rounded
                className="rotate-img mb-4"
              />
              <div className=" pt-1 text-white fw-bolder animate__animated animate__zoomIn">
                9 inch
              </div>
              <Card.Text className="text-white animate__animated animate__fadeInUp">
                <h5 className="px-4">Successfully completed project</h5>
                <p className="px-4 pt-2">
                  Some quick example text to build on the card title and make up the bulk
                </p>
              </Card.Text>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Outcontent;
