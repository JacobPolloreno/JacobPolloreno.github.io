import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {
  constructor() {
    super();
    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      expanded: false,
    };
  }

  toggleExpanded(expanded) {
    this.setState({ expanded: expanded });
  }

  handleSelect() {
    this.toggleExpanded(false);
  }

  render() {

    return (
      <Navbar staticTop={true} expanded={this.state.expanded}
        onToggle={this.toggleExpanded}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Jacob Polloreno</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#about">About</NavItem>
            <NavItem eventKey={2} href="#contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
