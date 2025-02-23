import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import group from '../image/Group 130.png';

const navItems = [
  { href: "#Home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#service", label: "Services" },
  { href: "#contact", label: "Contact" },
];

function NavHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custome-navbar" sticky="top">
        <Navbar.Brand href="#home">
          <img src={group} alt="logo" title="logo" width="100" height="90" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggle text-white" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-5">
            {navItems.map((item, index) => (
              <Nav.Link key={index} href={item.href} className="text-white fontdesign">
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavHeader;
