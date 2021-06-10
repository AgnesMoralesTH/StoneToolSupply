import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                    <p>Visit Us</p>
                    <p>5230 S 39th St, Phoenix, AZ 85040</p>
                    </Col>
                    <Col>
                    <p>Contact Us</p>
                    <p>(602) 354-8837</p>
                    </Col>
                    <Col>
                    <p>Open Hours</p>
                    <p>M-F: 8am – 8pm

Sat: 8am – 8pm

Sun: 10am – 2pm</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; ProShop </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
