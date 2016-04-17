import React from 'react';

import { Row, Col, Grid, Thumbnail, Input, ButtonInput } from 'react-bootstrap';

export default class Footer extends React.Component {

render () {

  return (
    <footer>
      <Row id="contact" class="contact">
        <h2 class="text-center">Send me a message</h2>
        <form>
          <Input type="text" label="Name" />
          <Input type="email" label="Email"  />
          <Input type="textarea" label="Message"  />
          <ButtonInput type="submit" value="Submit" />
        </form>
      </Row>
    </footer>
  );
}

};
