// Footer component (with mentions and acknowledgments)

import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { FaLinkedinIn, FaGithub, FaArtstation, FaHeart } from 'react-icons/fa'

const Footer = props => {
  return (
    <Navbar fixed="bottom" collapseOnSelect expand="lg" style={{backgroundColor: "#413EA0"}} variant="dark">
      <Navbar.Brand href="https://openweathermap.org/">@OWM Powered</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="https://nirbhay.me"><b>Made with <FaHeart/> in Rochester, NY</b></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/nirbhayph/weatherfox"><FaGithub/> View Project on GitHub</Nav.Link>
          <Nav.Link href="https://linkedin.com/in/nirbhaypherwani"><FaLinkedinIn/></Nav.Link>
          <Nav.Link eventKey={2} href="https://nirbhay.me">
            <FaArtstation/>
          </Nav.Link>
          <Nav.Link eventKey={3} href="https://github.com/nirbhayph">
            <FaGithub/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer;
