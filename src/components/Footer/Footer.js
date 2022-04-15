import React from "react";
import { Col, Container, Nav, NavItem, NavLink, Row } from "react-bootstrap";
import "../Footer/Footer.css";

import Payment from "../../images/payments.png";

import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer__section">
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <h6 className="text-primary">Company Info</h6>
              <Nav>
                <NavItem>
                  <NavLink>
                    <FaArrowRight /> About Us
                  </NavLink>
                  <NavLink>
                    <FaArrowRight /> Contact Us
                  </NavLink>
                  <NavLink>
                    <FaArrowRight /> Terms & Conditions
                  </NavLink>
                  <NavLink>
                    <FaArrowRight /> Privacy Policy
                  </NavLink>
                  <NavLink>
                    <FaArrowRight /> Payment Methods
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col xs={12} md={3}>
              <h6 className="text-primary">Help</h6>
              <Nav>
                <NavItem>
                  <NavLink>
                    {" "}
                    <FaArrowRight /> Help Center
                  </NavLink>
                  <NavLink>
                    {" "}
                    <FaArrowRight /> Shipping
                  </NavLink>
                  <NavLink>
                    {" "}
                    <FaArrowRight /> Order Status
                  </NavLink>
                  <NavLink>
                    {" "}
                    <FaArrowRight /> Track your Order
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col xs={12} md={3}>
              <h6 className="text-primary">Connect With Us</h6>
              <div className="social__links">
                <FaFacebook className="fs-1 me-3" />
                <FaTwitter className="fs-1 me-3" />
                <FaYoutube className="fs-1 me-3" />
                <FaInstagram className="fs-1" />
              </div>
            </Col>
            <Col xs={12} md={3}>
              <h6 className="text-primary">Secure Online Shopping</h6>
              <div className="payment__system">
                <img src={Payment} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <p className="text-center">
                Copyright &copy; Bikes-World | 2022. Made by{" "}
                <a target="_blank" href="https://github.com/mohisikder/">
                  Mohiuddin Sikder
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
