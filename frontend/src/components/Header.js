import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
  <Navbar.Brand href="/">Stone Tool Direct</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
      <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>  Cart</Nav.Link>
      <Nav.Link href="/login"><i className="fas fa-user"></i>Login</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
