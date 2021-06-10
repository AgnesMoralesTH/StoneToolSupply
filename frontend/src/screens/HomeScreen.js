import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'

import products from '../products'

function HomeScreen() {
    return (
        <div>
            <h1>Latest Products</h1>
            <Container>
            <Row >
                
                {products.map(product => (
                    <Col key={product._id} sm={6} m={6} lg={4} xl={3} >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
            </Container>
        </div>
    )
}

export default HomeScreen
