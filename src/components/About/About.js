import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../About/About.css";

const About = () => {
  return (
    <>
      <div className="about__section">
        <div className="about-bg">
          <h2 className="text-center text-white">
            Bikes World Corporate Office
          </h2>
        </div>
        <Container>
          <Row>
            <Col xs={12} md={12} className="about">
              <h3 className="text-center text-primary">
                About the Bikes World
              </h3>
              <p>
                <strong>
                  Founded in 1900, the INR 329 Billion Murugappa Group is one of
                  India’s leading business conglomerates.
                </strong>{" "}
                The Group has 28 businesses including nine listed Companies
                traded in NSE & BSE. Headquartered in Chennai, the major
                Companies of the Group include Carborundum Universal Ltd.,
                Cholamandalam Investment and Finance Company Ltd., Cholamandalam
                MS General Insurance Company Ltd., Coromandel International
                Ltd., Coromandel Engineering Company Ltd., E.I.D. Parry (India)
                Ltd., Parry Agro Industries Ltd., Shanthi Gears Ltd., Tube
                Investments of India Ltd., TI Financial Holdings Ltd and Wendt
                (India) Ltd.
              </p>
              <p>
                Market leaders in served segments including Abrasives, Auto
                Components, Transmission systems, Cycles, Sugar, Farm Inputs,
                Fertilisers, Plantations, Bio-products and Nutraceuticals, the
                Group has forged strong alliances with leading international
                companies such as Groupe Chimique Tunisien, Foskor, Mitsui
                Sumitomo, Morgan Advanced Materials, Sociedad Química y Minera
                de Chile (SQM),Yanmar & Co. and Compagnie Des Phosphat De Gafsa
                (CPG). The Group has a wide geographical presence all over India
                and spanning 6 continents.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
