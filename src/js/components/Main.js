import React from 'react';

import Box from './Main/Box';
import Section from './Main/Section';

import { Row, Col, Grid, Thumbnail } from 'react-bootstrap';

export default class Main extends React.Component {

  render() {

    return (
      <div class="main">
        <section id="about" class="about container">
          <Row>
            <i class="material-icons">format_quote</i>
            <p class="text-center">Hello,<br/>Welcome to my personal website.</p>
            <i class="material-icons pull-right">format_quote</i>
          </Row>
        </section>
      </div>
    );
  }
}
