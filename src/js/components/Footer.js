import React from 'react';

import fireRef from '../store';

import {Input, Button, OverlayTrigger, Popover, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.checkIsValid = this.checkIsValid.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isValid: false,
      name: '',
      email: '',
      message: '',
    };
  }

  handleEmailChange(e) {
    e.preventDefault();
    const email = e.target.value;
    this.setState({ email });
  }

  handleNameChange(e) {
    e.preventDefault();
    const name = e.target.value;
    this.setState({ name });
  }

  handleMessageChange(e) {
    e.preventDefault();
    const message = e.target.value;
    this.setState({ message });
  }

  handleSubmit(e) {
    e.preventDefault();
    fireRef.push(this.state);
    this.setState({ name:'', email:'', message:'' });
  }

  isEmailValid() {
    const { email } = this.state;
    if (email.length === 0) return '';
    else if (email.length > 0 && email.includes('@')) return 'success';
    else return 'warning';
  }

  checkIsValid() {
    const { name, email, message } = this.state;
    const valid = name.length !== 0 && email.length !== 0 && email.includes('@') && message.length !== 0;
    this.setState({ isValid: valid });
  }

render () {

  return (
    <footer>
      <div id="contact" class="contact container">
        <h2 class="text-center">Send me a message</h2>
        <form onSubmit={this.handleSubmit} onChange={this.checkIsValid}>
          <FormGroup controlId="Name">
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" value={this.state.name}
              onChange={this.handleNameChange}/>
          </FormGroup>
          <FormGroup controlId="Email" validationState={this.isEmailValid()}>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" value={this.state.email}
              onChange={this.handleEmailChange}/>
          </FormGroup>
          <FormGroup controlId="Message">
            <ControlLabel>Message</ControlLabel>
            <FormControl type="textarea" value={this.state.message}
              onChange={this.handleMessageChange}/>
          </FormGroup>
          <OverlayTrigger trigger="click" placement="bottom"
            overlay={<Popover  id="thanks" title="Successful Submit">Thanks. I will get back to you as soon as possible.</Popover>}>
            <Button type="submit" disabled={!this.state.isValid}>Submit</Button>
          </OverlayTrigger>
        </form>
      </div>
    </footer>
  );
}

};
