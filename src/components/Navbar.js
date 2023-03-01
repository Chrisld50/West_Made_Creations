import React from "react";
import { Nav, Navbar } from 'react-bootstrap';

export default function NavigationBar() {
    
    return (
        <div>
          <Navbar>
            <Nav className={"mx-auto"}>
              <Nav.Link className={""} href="/">Home</Nav.Link>
              <Nav.Link className={""}  href="/aboutme">About Me</Nav.Link>
           </Nav>
          <Nav>
          <Nav.Link eventKey={2} href="">
            </Nav.Link>
          </Nav>
      </Navbar>
      </div>
    )
}