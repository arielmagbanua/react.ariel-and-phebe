import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './AppNavbar.module.scss'

const AppNavbar: React.FC = () => {
  return (
    <Navbar className={styles['all-caps']} bg="light" variant="light" expand="lg">
      <Navbar.Brand href="/">
        <h1>Ariel <em>&amp;</em> Phebe</h1>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="app-navbar-links"/>

      <Navbar.Collapse id="app-navbar-links">
        <Nav className="mr-auto">
          {/*<Nav.Link className={styles['all-caps']} href="/groom-and-bride">Groom <em>&amp;</em> Bride</Nav.Link>*/}
          {/*<Nav.Link className={styles['all-caps']} href="/when-and-where">When <em>&amp;</em> Where</Nav.Link>*/}
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/rsvp">Rsvp</Link>
          <Link className="nav-link" to="/social">Social</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
