import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import styles from './AppNavbar.module.scss'

const AppNavbar: React.FC = () => {
  return (
    <Navbar className="shadow-sm" bg="light" variant="light">
      <Navbar.Brand className={styles['all-caps']} href="/">
        <h1>Ariel <em>&amp;</em> Phebe</h1>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className={styles['all-caps']} href="/">Home</Nav.Link>
        <Nav.Link className={styles['all-caps']} href="/groom-and-bride">Groom <em>&amp;</em> Bride</Nav.Link>
        <Nav.Link className={styles['all-caps']} href="/when-and-where">When <em>&amp;</em> Where</Nav.Link>
        <Nav.Link className={styles['all-caps']} href="/rsvp">Rsvp</Nav.Link>
        <Nav.Link className={styles['all-caps']} href="/social">Social</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;
