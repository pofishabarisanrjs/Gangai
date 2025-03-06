import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "animate.css";
import Op from "../image/op.svg";
import eve from "../image/eve.svg";

function Video() {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container className="video py-5 px-5">
      <Row className="align-items-center justify-content-center">
        {/* Left Content */}
        <Col
          xs={12}
          lg={6}
          className="animate__animated animate__fadeInLeft text-center text-md-start"
        >
          <Container>
            <div className="headingcss fontdesign pb-4">Success Story</div>
            <p className="fontdesign">
              A paragraph is defined as “a group of sentences or a single
              sentence that forms a unit” (Lunsford and Connors 116). Length and
              appearance do not determine whether a section in a paper is a
              paragraph. For instance, in some styles of writing, particularly
              journalistic styles.
            </p>
          </Container>

          {/* Card Section */}
          <Row className="justify-content-center">
            {[
              { title: "Facebook", img: eve, url: "https://www.facebook.com" },
              { title: "Youtube", img: Op, url: "https://www.youtube.com" },
            ].map((item, index) => (
              <Col xs={12} sm={6} key={index} className="mb-4">
                <Card className="border-0 animate__animated animate__zoomIn h-100 p-3 card-hover">
                  <div className="d-sm-flex d-md-block align-items-center">
                    {/* Image */}
                    <img
                      src={item.img}
                      width="60"
                      height="60"
                      className="mx-auto mx-md-0 d-block mb-2"
                      alt={item.title}
                    />
                  </div>
                  <Card.Body className="text-center text-md-start">
                    <Card.Title className="fontdesign fw-bold">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="fontdesign">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button
                      className="readmorebtn border-0 mx-auto mx-md-0 d-block mt-2 animate__animated animate__pulse animate__infinite"
                      onClick={() => handleRedirect(item.url)}
                    >
                      Read more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right Content */}
        <Col
          xs={12}
          md={6}
          className="animate__animated animate__fadeInRight"
          style={{ height: "55vh" }}
        >
          <iframe
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            title="YouTube video"
            allowFullScreen
            className="w-100 h-100"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default Video;
