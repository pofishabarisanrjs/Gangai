import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import group from "../image/Group 130.png";
import Container from "react-bootstrap/esm/Container";

const navItems = [
  { href: "#Home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#service", label: "Services" },
  { href: "#contact", label: "Contact" },
];

function NavHeader() {
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [sticky, setSticky] = useState(false);

  const changeNavStyle = () => {
    if (window.scrollY > 0) {
      setBgColor('rgb(0, 0, 0)'); // 40% opacity black
      setSticky(true);
    } else {
      setBgColor("transparent");
      setTextColor("white");
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavStyle);
    return () => {
      window.removeEventListener("scroll", changeNavStyle);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`custome-navbar ${sticky ? 'sticky-navbar' : ''}`}
      fixed="top"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={group} alt="logo" title="logo" width="100" height="90" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggle"
        />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="ms-auto nav1-size">
            {navItems.map((item, index) => (
              <Nav.Link
                key={index}
                href={item.href}
                className="fontdesign ms-3"
                style={{ color: textColor }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
