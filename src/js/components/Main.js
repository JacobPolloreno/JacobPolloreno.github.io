import React from 'react';

import Box from './Main/Box';
import Section from './Main/Section';

import {Jumbotron } from 'react-bootstrap';

export default class Main extends React.Component {

  render() {

    return (
      <div class="main">
	    <Jumbotron>
	    	<h1>Let's have some fun!<br/>Update coming soon...</h1>
	    </Jumbotron>
      </div>
    );
  }
}
