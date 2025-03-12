import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import base2 from '../image/base2.jpg'
import Button from 'react-bootstrap/Button';

function Tabcontent() {
  return (
    <div className="tab">
    <Container>
    <Row className="g-3" >
              <Col xs={12} md={4}>
                <img src={base2} className="rounded w-100 "alt=" "/>
              </Col>
              <Col xs={12} md={4}>
              <img src={base2} className="rounded w-100 "alt=" "/>
              </Col>
              <Col xs={12} md={4}>
              <img src={base2} className="rounded w-100 "alt=" "/>
              </Col>
              <Col xs={12} md={4}>
                <img src={base2} className="rounded w-100 "alt=" "/>
              </Col>
              <Col xs={12} md={4}>
              <img src={base2} className="rounded w-100 "alt=" "/>
              </Col>
              <Col xs={12} md={4}>
              <img src={base2} className="rounded w-100 "alt=" "/>
              </Col>
              <Col xs={12} md={4}>
                <img src={base2} className="rounded w-100 "alt=" "/>
              </Col>
              <Col xs={12} md={4}>
              <img src={base2} className="rounded w-100 "alt=" "/>
              </Col>
              <Col xs={12} md={4}>
              <img src={base2} className="rounded w-100 "alt=" "/>
              </Col>
            </Row>
            <Row  className="mt-4">
       
            </Row>
 </Container>
 {/* <div className=" tabbutton"><Container>
      <Row>
        <Col> 
        <Button variant="success" className='readmore fontdesign'>Load More</Button>
        </Col>
      </Row>
    </Container></div> */}
    </div>
  );
}

export default Tabcontent;
