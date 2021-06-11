import React, {useState, useEffect} from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'


function HomeScreen() {
    const [products, setProducts] = useState([])

    useEffect(() => {

        async function fetchProducts(){
            const  { data } = await axios.get('/api/products/')
            setProducts(data)
        }

        fetchProducts()

    }, [])
    console.log(products)
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
