import React from "react";
import "../Home/Home.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div className="banner__section">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <div className="banner__info">
                <h2>Life is better on a bike</h2>
                <h4>
                  Backed by a company that’s serious <br /> about making the
                  best bikes in the world.
                </h4>
                <Button>Explore</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
