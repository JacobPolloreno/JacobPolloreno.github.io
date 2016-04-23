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
    return (
        <Row class="box" onClick={this.open}>
          <Thumbnail class={this.props.size} src={this.props.src} alt={this.props.alt}></Thumbnail>
          <LightBox show={this.state.showModal} close={this.close} src={this.props.msrc} type={this.props.mtype} desc={this.props.desc}/>
        </Row>
    );
  }
}
