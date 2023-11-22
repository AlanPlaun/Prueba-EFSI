import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import "./Navbar.css"

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="contenido">
        <Navbar.Brand href="/" className='texto'>Home</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/instructions" className='texto'>
              Instrucciones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;