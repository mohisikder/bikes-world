import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../Home/Home.css";

import {
  CategoryOne,
  CategoryTwo,
  CategoryThree,
  CategoryFour,
} from "../../constant";

import { FaBicycle } from "react-icons/fa";

const Category = () => {
  return (
    <>
      <div className="category__section">
        <Container>
          <h2 className="category__title">
            <FaBicycle className="fs-1 me-3" /> Shop by Category
          </h2>
          <Row className="g-4">
            <Col xs={12} md={3}>
              <div className="category__info">
                <div className="category__overlay">
                  <img src={CategoryOne} alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="link-icon">
                      <a href="">
                        <h3>City and Hybrid</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="category__info">
                <div className="category__overlay">
                  <img src={CategoryTwo} alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="link-icon">
                      <a href="">
                        <h3>Road</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="category__info">
                <div className="category__overlay">
                  <img src={CategoryThree} alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="link-icon">
                      <a href="">
                        <h3>Mountain</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="category__info">
                <div className="category__overlay">
                  <img src={CategoryFour} alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="link-icon">
                      <a href="">
                        <h3>Gravel</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Category;
