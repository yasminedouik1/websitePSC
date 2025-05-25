import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

function NavbarComponent() {
  return (
    <Navbar bg="white" expand="lg" className="w-100 fixed-top left-0">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/src/assets/logo.png"
            alt="Amazigh Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-link">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/about">A propos</Nav.Link>
            <Nav.Link as={Link} to="/langue">Langue</Nav.Link>
            <Nav.Link as={Link} to="/tradition">Tradition et culture</Nav.Link>
            <Nav.Link as={Link} to="/court-métrage">Court-Métrage</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
