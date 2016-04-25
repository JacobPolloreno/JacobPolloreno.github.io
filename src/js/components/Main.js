import React from 'react';

import Box from './Main/Box';
import Section from './Main/Section';

import { Row, Col, Grid, Thumbnail } from 'react-bootstrap';

export default class Main extends React.Component {

  render() {

    return (
      <div class="main">
        <Section title="PHILOSOPHER">
          <Col xs={2} md={2}>
            <Box size="tall" src="../../../assets/self_collage.jpg" mtype="image" msrc="../../../assets/sea.jpg"
              desc=""></Box>
          </Col>
          <Col xs={10} md={10}>
            <Box size="tall" src="../../../assets/SoA.jpg" mtype="image" msrc="../../../assets/SoA.jpg"
              desc="Philosophy is a major part in developing the questions I wish to answer."></Box>
          </Col>
        </Section>
        <Section title="DEVELOPER">
          <Col xs={9} md={9}>
            <Box size="standard" src="../../../assets/toysandgiftshop-cropped.png"
                msrc="../../../assets/toysandgiftshop.png" mtype="image"
                desc="Built and designed an ecommerce web app using Django and Python. I was reponsible for system administration work such as setting up hosting, deploying, optimizing, and SEO services.
                I learned a great deal about basic design principles in conjunction with user interaction in a store."></Box>
              <Row>
                <Col xs={6} md={6}>
                  <Box size="standard" src="../../../assets/fccnews.gif" mtype="embed-cp" msrc="vLEyjy"
                    desc="My submittion to FreeCodeCamps Camper News challenge. I used Jade, CSS, and jquery to achieve the disired results.
                    This project taught be about grid layouts on the web."></Box>
                </Col>
                <Col xs={6} md={6}>
                  <Box size="standard" src="../../../assets/tic-tac-toe.png" mtype="embed-cp" msrc="RrzgOx"
                    desc="A basic tic-tac-toe game built with javascript ES6 that showcases a rudimentary AI."></Box>
                </Col>
              </Row>
          </Col>
          <Col xs={3} md={3}>
            <Box size="tall" src="../../../assets/img1.jpg" mtype="image" msrc="../../../assets/sail_stem_collage.jpg"
              desc="Built, designed, and managed an interactive social media platform and classroom for a summer camp. The web app was built using Angular front-end and Django backend.
              Students were eager to share their experience with coming to the United States for the first time to study."></Box>
          </Col>
        </Section>
        <Section title="TEACHER">
          <Col xs={9} md={9}>
            <Box size="tall" src="../../../assets/group2-cropped.jpg" mtype="image" msrc="../../../assets/group2.jpg"
              desc="Our teaching squad for a STEM camp. I was tasked with preparing and teaching material for english reading and writing as well as critical thinking."></Box>
          </Col>
          <Col xs={3} md={3}>
              <Box size="standard" src="../../../assets/Sean.jpg" mtype="image" msrc="../../../assets/Sean.jpg"
                desc="This is Sean. I've been tutoring him for at least two years. We've worked on making the transition from Chinese style education to American style by focusing
                on critical thinking/philosophy habits. He's had great success since coming to the US and continues to improve daily. I've enjoyed learning from Sean and watching
                him develop."></Box>
              <Box size="standard" src="../../../assets/alex-cropped.jpg" mtype="image" msrc="../../../assets/alex.jpg"
                desc="This is Alex. I've been tutoring and mentoring Alex for over two years. He's a great student and kid. I try to foster his inquisitive mind
                and facilitate challenging discussions."></Box>
          </Col>
        </Section>
        <section id="about" class="about row">
          <div class="container">
            <i class="material-icons">format_quote</i>
            <p class="text-center">Hello,<br/>My name is Jacob Polloreno. I love to talk about <strong>philosophy</strong> and <strong>programming</strong>. Sometimes both at the same time.
               I graduated <em>UC Davis</em> with a bachelor's in philosophy. I'm using that degree to create interesting critical thinking tools for K-12 learners. I've built
             web applications using <u>React</u>, <u>Angular</u>, and <u>Django</u>. </p>
            <i class="material-icons pull-right">format_quote</i>
          </div>
        </section>
      </div>
    );
  }
}
