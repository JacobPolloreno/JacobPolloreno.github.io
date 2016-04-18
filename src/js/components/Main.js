import React from 'react';

import Box from './Main/Box';
import Section from './Main/Section';

import { Row, Col, Grid, Thumbnail } from 'react-bootstrap';

export default class Main extends React.Component {

  render() {

    return (
      <div class="main">
        <Section title="PHILOSOPHER">
          <Col xs={3} md={3}>
            <Box size="tall" src="http://lorempixel.com/275/510"></Box>
          </Col>
          <Col xs={9} md={9}>
            <Row>
              <Col xs={8} md={8}>
                <Box size="standard" src="http://lorempixel.com/560/250"></Box>
              </Col>
              <Col xs={4} md={4}>
                <Box size="standard" src="http://lorempixel.com/275/250"></Box>
              </Col>
            </Row>
            <Box size="standard" src="http://lorempixel.com/845/250" ></Box>
          </Col>
        </Section>
        <Section title="DEVELOPER">
          <Col xs={3} md={3}>
            <Box size="standard"></Box>
          </Col>
          <Col xs={6} md={6}>
            <Box size="standard"></Box>
          </Col>
          <Col xs={3} md={3}>
            <Box size="standard"></Box>
          </Col>
          <Col xs={6} md={6}>
            <Box size="standard"></Box>
          </Col>
          <Col xs={3} md={3}>
            <Box size="standard"></Box>
          </Col>
          <Col xs={3} md={3}>
            <Box size="standard"></Box>
          </Col>
        </Section>
        <section id="about" class="about row">
          <Row>
            <i class="material-icons">format_quote</i>
            <p class="text-center">My name is Jacob Polloreno.</p>
            <i class="material-icons pull-right">format_quote</i>
          </Row>
        </section>
        <Section title="TEACHER">
          <Col xs={3} md={3}>
            <Box size="standard"></Box>
          </Col>
          <Col xs={6} md={6}>
            <Box size="standard"></Box>
          </Col>
          <Col xs={3} md={3}>
            <Box size="standard"></Box>
          </Col>
          <Col xs={6} md={6}>
            <Box size="standard"></Box>
          </Col>
          <Col xs={3} md={3}>
            <Box size="standard"></Box>
          </Col>
          <Col xs={3} md={3}>
            <Box size="standard"></Box>
          </Col>
        </Section>
        <Section title="STUDENT">
          <Col xs={4} md={4}>
            <Box size="tall" src="http://lorempixel.com/370/510"></Box>
          </Col>
          <Col xs={4} md={4}>
            <Box size="tall" src="http://lorempixel.com/370/510"></Box>
          </Col>
          <Col xs={4} md={4}>
            <Box size="tall" src="http://lorempixel.com/370/510"></Box>
          </Col>
        </Section>
      </div>
    );
  }
}
