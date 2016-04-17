import React from 'react';
import { Grid } from 'react-bootstrap';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

export default class Layout extends React.Component {

  render() {

    return (
      <Grid>
        <Header />
        <Main />
        <hr/>
        <Footer />
      </Grid>
    );
  }
}
