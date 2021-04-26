import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const AppNavBar: React.FC = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">
        <h1>Ariel <em>&amp;</em> Phebe</h1>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/groom-and-bride">Groom <em>&amp;</em> Bride</Nav.Link>
        <Nav.Link href="/when-and-where">When <em>&amp;</em> Where</Nav.Link>
        <Nav.Link href="/rsvp">Rsvp</Nav.Link>
        <Nav.Link href="/social">Social</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default AppNavBar;
