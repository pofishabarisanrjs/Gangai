import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import base2 from '../image/base2.jpg'

function Sec6img3() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={base2} width="150"height="150" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Sec6img3;