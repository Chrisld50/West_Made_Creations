import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import '../styling/Navbar.css';

export default function NavigationBar() {
    
    return (
        <div>
          <Navbar>
            <Nav className={"mx-auto navbar"}>
              <Nav.Link className={"navbar"} href="/">Home</Nav.Link>
              <Nav.Link className={"navbar"}  href="/aboutme">About Me</Nav.Link>
              <Nav.Link className={"navbar"}  href="/contact">Contact</Nav.Link>
           </Nav>
          <Nav>
          <Nav.Link eventKey={2} href="">
            </Nav.Link>
          </Nav>
      </Navbar>
      </div>
    )
}