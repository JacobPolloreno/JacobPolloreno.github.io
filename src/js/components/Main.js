import React from 'react';

import Box from './Main/Box';
import Section from './Main/Section';

import { Row, Col, Grid, Thumbnail } from 'react-bootstrap';

export default class Main extends React.Component {

  render() {

    return (
      <div class="main">
        <section id="about" class="about row">
          <div class="container">
            <i class="material-icons icon-flipped">format_quote</i>
            <p class="text-center">Hello,<br/>My name is Jacob Polloreno. I love to talk about <strong>philosophy</strong> and <strong>programming</strong>. Sometimes both at the same time.
               I graduated <em>UC Davis</em> with a bachelor's in philosophy. I'm using that degree to create interesting critical thinking tools for K-12 learners. I've built
             web applications using <u>React</u>, <u>Angular</u>, and <u>Django</u>. </p>
            <i class="material-icons pull-right">format_quote</i>
          </div>
        </section>
        <Section title="DEVELOPER">
          <Col xs={9} md={9}>
            <Col xs={7} md={7}>
              <Box size="standard" src="../../../assets/toysandgiftshop-cropped.png"
                msrc="../../../assets/toysandgiftshop.jpg" mtype="image"
                desc="Built and designed an ecommerce web app using Django and Python. I was reponsible for system administration work such as setting up hosting, deploying, optimizing, and SEO services.
                I learned a great deal about basic design principles in conjunction with user interaction in a store."></Box>
            </Col>
            <Col xs={5} md={5}>
              <Box size="standard" src="../../../assets/toysandgiftshop-cropped.png"
                msrc="../../../assets/toysandgiftshop.jpg" mtype="image"></Box>
            </Col>
            <Col xs={4} md={4}>
              <Box size="standard" src="../../../assets/tic-tac-toe.png" mtype="embed-cp" msrc="RrzgOx"
                desc="A basic tic-tac-toe game built with javascript ES6 that showcases a rudimentary AI."></Box>
            </Col>
            <Col xs={4} md={4}>
              <Box size="standard" src="../../../assets/recipesproject.png" mtype="image" msrc="../../../assets/recipesproject-wide.png"
                mextra="link" lhref="http://jacobsrecipes.surge.sh" ldesc="Click for live demo."
                desc="This is a grocery list app built with React that I was experimenting with. My goals were to improve my UX approach."></Box>
            </Col>
            <Col xs={4} md={4}>
              <Box size="standard" src="../../../assets/markdown.jpg" mtype="image" msrc="../../../assets/markdown.jpg" mextra="link"
                mextra="link" lhref="http://jacobsmarkdown.surge.sh" ldesc="Click for live demo."
                desc="Simple markdown previewer that demonstrates two way binding."></Box>
            </Col>
          </Col>
          <Col xs={3} md={3}>
            <Box size="tall" src="../../../assets/img1.jpg" mtype="image" msrc="../../../assets/sail_stem_collage.jpg"
              desc="Built, designed, and managed an interactive social media platform and classroom for a summer camp. The web app was built using Angular front-end and Django backend.
              Students were eager to share their experience with coming to the United States for the first time to study."></Box>
          </Col>
        </Section>
        <Section title="TEACHER">
          <Col xs={4} md={4}>
            <Box size="standard" src="../../../assets/stemgroup.jpg" mtype="image" msrc="../../../assets/perceiver-min.jpg"
              desc="Our teaching squad for a STEM camp. I was tasked with preparing and teaching material for english reading and writing as well as critical thinking."></Box>
            <Box size="standard" src="../../../assets/vid1.png" mtype="embed-yt" msrc="Pa99fOdogJs" desc="I was responsible for writing and creating a video series to teach STEM-style writing
              to international students for an essay competition. I created six videos in the series to talk about brainstorming, outlining, writing, etc."></Box>
          </Col>
          <Col xs={3} md={3}>
              <Box size="standard" src="../../../assets/Sean.jpg" mtype="image" msrc="../../../assets/Sean.jpg"
                desc="This is Sean. I've been tutoring him for at least two years. We've worked on making the transition from Chinese style education to American style by focusing
                on critical thinking/philosophy habits. He's had great success since coming to the US and continues to improve daily. I've enjoyed learning from Sean and watching
                him develop."></Box>
              <Box size="standard" src="../../../assets/alex-min.jpg" mtype="image" msrc="../../../assets/alex.jpg"
                desc="This is Alex. I've been tutoring and mentoring Alex for over two years. He's a great student and kid. I try to foster his inquisitive mind
                and facilitate challenging discussions."></Box>
          </Col>
          <Col xs={5} md={5}>
            <Box size="standard" src="../../../assets/critical-thinking.png" mtype="embed-sl" msrc="1IMmddDx29So_as88J0Rtn5WrBu1dDcsKVcqUcx26GN0" desc="I taught at a summer camp for two weeks.
              One of the courses I created and taught was critical thinking. These are the slides are used."></Box>
          </Col>
        </Section>
        <Section title="PHILOSOPHER">
          <Col xs={2} md={2}>
            <Box size="tall" src="../../../assets/self_collage.jpg" mtype="image" msrc="../../../assets/sea.jpg"
              desc="Philosophy has framed my perspective on how to live. It provides a set of habits and skills to achieve knowledge and navigate
              the world. "></Box>
          </Col>
          <Col xs={10} md={10}>
            <Box size="tall" src="../../../assets/SoA.jpg" mtype="image" msrc="../../../assets/SoA.jpg"
              desc="Philosophy is a major part in developing the questions I wish to answer. These philsophers have taught me how to think
              which is an invaluable tool to have. I wish to create tools for future generations that expose them to philosophy."></Box>
          </Col>
        </Section>

      </div>
    );
  }
}
