import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { useCart } from "./context/context";


function Mynavbar() {
  const {count,cartproduct,DeleteCart,total,Deprice,setSearchinput,handleSearchClick} = useCart();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{ fontSize: "30px" }}>
          SHOPPING ME
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="http://localhost:3000/" style={{fontSize:"24px"}}>Home</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown" style={{fontSize:"24px"}}>
              <NavDropdown.Item onClick={() => setSearchinput("Shirt")}>
                Shirt
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setSearchinput("Pant")}>
                Pant
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setSearchinput("Shoe")}>
                Shoe
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setSearchinput("Hat")} style={{paddingBottom:"15px"}}>
                Hat
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            style={{ marginRight: "15px" }}
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          {/* <p style={{fontSize:"18px",marginRight:"30px",paddingTop:"15px"}}><b>Product in cart : {count}</b></p> */}
          <NavDropdown
            title={
              <strong style={{ fontSize: "20px", paddingTop: "15px" }}>
                Product in cart: {count}
              </strong>
            }
            id="basic-nav-dropdown"
            style={{ marginRight: "30px" }}
          >
            {cartproduct.map((product) => (
              <div key={product.id}>
                <div style={{ width: "100%" }}>
                  <NavDropdown.Item
                    href="#action/3.1"
                    style={{ width: "250px" }}
                  >
                    {product.title} x <span>{product.amount}</span>
                    <Button
                      variant="danger"
                      style={{
                        display: "inline-block",
                        float: "right",
                        backgroundColor: "red",
                        height: "28px",
                        border: "none",
                      }}
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        DeleteCart(product);
                        Deprice(product.price);
                      }}
                    >
                      Del
                    </Button>
                    <p style={{ float: "right", marginRight: "10px" }}>
                      <b>{product.price}</b>
                    </p>
                  </NavDropdown.Item>
                </div>
                <NavDropdown.Divider style={{ width: "100%" }} />
              </div>
            ))}
            <NavDropdown.Item href="#action/3.1">
              <b>total:<span style={{float:"right"}}> {total} Bath</span></b>
            </NavDropdown.Item>

            <NavDropdown.Item href="#action/4"style={{backgroundColor: "rgb(131, 230, 255)",padding:"10px 0px", textAlign:"center", marginTop:"10px"}}> 
              <b>Purchase</b>
            </NavDropdown.Item>
          </NavDropdown>
          </div>
          <Form className="d-flex">
            <Form.Control
              type="input"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={null}
              id="searchInput"
            />
            <Button variant="outline-success" onClick={handleSearchClick}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;
