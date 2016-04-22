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
      <Navbar fixedTop={true} expanded={this.state.expanded}
        onToggle={this.toggleExpanded}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Jacob Polloreno</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#about" onSelect={this.handleSelect}>About</NavItem>
            <NavItem eventKey={2} href="#contact">
              <span class="material-icons">mail</span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
