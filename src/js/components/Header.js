import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {

  render() {

    return (
      <Navbar fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Jacob Polloreno</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#about">About</NavItem>
            <NavItem eventKey={2} href="#contact">
              <span class="material-icons">mail</span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
