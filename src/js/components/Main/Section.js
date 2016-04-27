import React from 'react';

import { Row, Grid } from 'react-bootstrap';

export default class Section extends React.Component {

  render() {
    const styles = {
      section: {
        border: '.5px solid green',
      },
    };

    return (
        <Row componentClass="section" >
          <span class="vertical">{this.props.title}</span>
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
