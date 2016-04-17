import React from 'react';

import LightBox from './LightBox';

import { Row, Thumbnail } from 'react-bootstrap';

export default class Box extends React.Component {
  constructor() {
    super();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      showModal: false,
    };
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    const size = this.props.size === 'tall' ? 'tall' : 'standard';
    const styles = {
      box: {
        border: '.5px solid red',
      },
    };

    const caption = this.props.title  ? <h3>{this.props.title}</h3> : null;

    return (
        <Row class="box" onClick={this.open}>
          <Thumbnail class={size} src={this.props.src} alt={this.props.alt}></Thumbnail>
          <LightBox show={this.state.showModal} close={this.close}/>
        </Row>
    );
  }
}
