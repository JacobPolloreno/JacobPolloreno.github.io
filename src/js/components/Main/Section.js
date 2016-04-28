import React from 'react';

import { Row, Grid } from 'react-bootstrap';

export default class Section extends React.Component {

  render() {

    return (
        <Row componentClass="section" >
          <Grid>
            {this.props.children}
          </Grid>
          <Row>
            <h1 class="headers">{this.props.title}</h1>
          </Row>
        </Row>
    );
  }
}
