import React from 'react';

import { Modal, Image } from 'react-bootstrap';

export default class LightBox extends React.Component {

  render() {

    return (
      <Modal bsSize="large" show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image src="http://lorempixel.com/1200/700" responsive />
        </Modal.Body>
        <Modal.Footer>
          <p>This is a description of the image.</p>
        </Modal.Footer>
      </Modal>
    );
  }
}
