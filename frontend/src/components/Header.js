import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>

    <LinkContainer to="/">
  <Navbar.Brand>Stone Tool Direct</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/products">
      <Nav.Link>Products</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/aboutus">
          <Nav.Link>About Us</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/contactus">
          <Nav.Link>Contact Us</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/cart">
      <Nav.Link><i className="fas fa-shopping-cart"></i>  Cart</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
      <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
      </LinkContainer>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
