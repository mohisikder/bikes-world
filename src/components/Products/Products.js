import React, { useEffect, useState } from "react";
import "../Products/Products.css";
import { Card, Col, Container, NavLink, Row } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`/data.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="products__section">
        <Container>
          <div className="products__title">
            <h2>Choose your Products</h2>
          </div>
          <Row xs={12} md={3} className="g-2">
            {products.map((pd, index) => (
              <Col key={pd?.id}>
                <NavLink>
                  <Card className="h-100">
                    <Card.Img className="px-4" variant="top" src={pd?.img} />
                    <Card.Body>
                      <Card.Title>{pd?.title}</Card.Title>
                      <h4>MRP: $ {pd?.price}</h4>
                      <button className="btn btn-dark card-btn">
                        Know More
                      </button>
                    </Card.Body>
                  </Card>
                </NavLink>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Products;
