import React from 'react';

import { Modal, Image, ResponsiveEmbed } from 'react-bootstrap';

export default class LightBox extends React.Component {

  render() {
    let component;
    if (this.props.type === 'image') {
      component = <Image src={this.props.src} responsive />;
    } else if (this.props.type === 'embed-cp') {
      const url = `//codepen.io/makaveliix16/embed/${this.props.src}/?height=500&theme-id=light&default-tab=result&embed-version=2`;
      component = <ResponsiveEmbed a16by9>
        <iframe scrolling='no' src={url}></iframe>
      </ResponsiveEmbed>;
    } else if (this.props.type === 'embed-vm') {

    } else if (this.props.type === 'embed-sl') {}

    return (
      <Modal bsSize="large" show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {component}
        </Modal.Body>
        <Modal.Footer>
          <p>{this.props.desc}</p>
        </Modal.Footer>
      </Modal>
    );
  }
}
