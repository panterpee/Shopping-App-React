import React from "react";
import "./Product.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import productlist from "../data/ProductList";
import { useCart } from "./context/context";

function Products() {
  const { Addproduct, searchinput} = useCart();
  return (
    <>
      <h1 style={{ paddingTop: "3rem" ,textAlign:"center",fontFamily:"fantasy"}}>All Products</h1>
      <div
        className="container"
        style={{ marginBottom: "5rem", marginTop: "3rem" }}
      >
        <Row xs={1} md={4} className="g-4">
          {searchinput === ""
            ? productlist.map((product) => (
                <Col key={product.id}>
                  <Card className="customCard">
                    <Card.Img
                      variant="top"
                      src={product.src}
                      style={{ height: "300px", objectFit: "contain" }}
                    />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.detail}</Card.Text>
                      <Button
                        className="button-custom"
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          Addproduct(product);
                        }}
                      >
                        Add to cart
                      </Button>
                      <p style={{ display: "inline-block", float: "right" }}>
                        <b>{product.price} Bath</b>
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : productlist.filter((product) =>
                  product.title.toLowerCase().includes(searchinput.toLowerCase())
                )
                .map((filteredProduct) => (
                  <Col key={filteredProduct.id}>
                    <Card className="customCard">
                      <Card.Img
                        variant="top"
                        src={filteredProduct.src}
                        style={{ height: "300px", objectFit: "contain" }}
                      />
                      <Card.Body>
                        <Card.Title>{filteredProduct.title}</Card.Title>
                        <Card.Text>{filteredProduct.detail}</Card.Text>
                        <Button
                          className="button-custom"
                          variant="secondary"
                          size="sm"
                          onClick={() => {
                            Addproduct(filteredProduct);
                          }}
                        >
                          Add to cart
                        </Button>
                        <p style={{ display: "inline-block", float: "right" }}>
                          <b>{filteredProduct.price} Bath</b>
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
        </Row>
      </div>
    </>
  );
}

export default Products;
