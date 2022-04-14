import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { AboutImg } from "../../constant";

const About = () => {
  return (
    <>
      <div className="about__section">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="about__img">
                <img src={AboutImg} alt="" />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="about__info">
                <h2>Direct to Consumer Pricing</h2>
                <h4>Ride More For Less with Polygon Bikes</h4>
                <p>
                  Why buy from Bikes World? The Polygon bikes in our online bike
                  shop are often half the price of comparable bikes in the
                  market, and that is due to our direct to consumer business
                  model. We source high-quality bikes from the manufacturer, cut
                  out the middlemen, and pass on the savings to you - where they
                  belong.
                </p>
                <Button>Learn More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
