import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaGlobeAfrica, FaBuilding, FaBell } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPieChartSharp } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";

import "animate.css";

const CardComponent = ({ title, iconSize, Icon, color, hoverAnimation }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="card-style border-0 text-center p-3">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`d-inline-block animate__animated ${isHovered ? hoverAnimation : ""}`}
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <Icon size={iconSize} style={{ color }} />
      </div>
      <Card.Body>
        <Card.Title className="fontdesign text-center">{title}</Card.Title>
        <Card.Text className="fontdesign text-center">
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

function Loremcontent() {
  const cardData = [
    { title: "Email", iconSize: 40, Icon: MdEmail, color: "#007BFF", hoverAnimation: "animate__heartBeat" },
    { title: "Shopping", iconSize: 40, Icon: FaBagShopping, color: "#FF5733", hoverAnimation: "animate__tada" },
    { title: "Globe", iconSize: 40, Icon: FaGlobeAfrica, color: "#28A745", hoverAnimation: "animate__pulse" },
    { title: "Building", iconSize: 40, Icon: FaBuilding, color: "#FFC107", hoverAnimation: "animate__swing" },
    { title: "Pie Chart", iconSize: 40, Icon: IoPieChartSharp, color: "#6610F2", hoverAnimation: "animate__wobble" },
    { title: "Notifications", iconSize: 40, Icon: FaBell, color: "#DC3545", hoverAnimation: "animate__rubberBand" },
  ];

  return (
    <div className="lorem text-center">
      <Container>
        <Row>
          {cardData.map((card, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4} >
              <CardComponent {...card} />
            </Col>
          ))}
        </Row>
      </Container>


    </div>
  );
}

export default Loremcontent;
