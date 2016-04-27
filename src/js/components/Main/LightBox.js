import React from 'react';

import { Modal, Button, Image, ResponsiveEmbed } from 'react-bootstrap';

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
    }else if (this.props.type === 'embed-sl') {
      const url = `https://docs.google.com/presentation/d/${this.props.src}/embed`;
      component = <ResponsiveEmbed a16by9>
        <iframe src={url} allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"/>
        </ResponsiveEmbed>;
    } else if (this.props.type === 'embed-yt') {
      const url = `http://www.youtube.com/embed/${this.props.src}`;
      component = <ResponsiveEmbed a16by9><iframe id="ytplayer" type="text/html" src={url}/></ResponsiveEmbed>;
    }

    let link;
    if (this.props.extra === 'link') {
      link = <Button bsSize="small" href={this.props.lhref} target="_blank">{this.props.ldesc}</Button>;
    }

    return (
      <Modal bsSize="large" show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {component}
        </Modal.Body>
        <Modal.Footer>
          <p>{this.props.desc}</p>
          {link}
        </Modal.Footer>
      </Modal>
    );
  }
}
