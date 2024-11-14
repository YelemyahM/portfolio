import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useState } from "react";
import logo from "../assets/logo.png";

export const CustomNavbar = () => {
  const linkStyle = (isHovered) => ({
    color: isHovered ? "#ff6347" : "#ededed",
    textDecoration: "none",
    transition: "color 0.3s ease",
  });
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <>
      <Navbar expand="md" style={{ background: "#1e1e1e", fontWeight: "700" }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Logo"
              width="30px"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ background: "#FF4500" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto" variant="underline">
              <Nav.Link
                as={Link}
                to="/"
                style={linkStyle(hoveredLink === "accueil")}
                onMouseEnter={() => setHoveredLink("accueil")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                accueil
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                style={linkStyle(hoveredLink === "about")}
                onMouseEnter={() => setHoveredLink("about")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                à propos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                style={linkStyle(hoveredLink === "projects")}
                onMouseEnter={() => setHoveredLink("projects")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                projets
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                style={linkStyle(hoveredLink === "contact")}
                onMouseEnter={() => setHoveredLink("contact")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
