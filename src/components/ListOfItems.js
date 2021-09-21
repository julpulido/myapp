import React from 'react'
import ProductItem from './ProductItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function ListOfItems() {
    return (
        <Container fluid="sm">
        <Row> 
        <Col>
            <ProductItem />
            </Col>

            <Col>
            <ProductItem />
            </Col>
            <Col>
            <ProductItem />
            </Col>
            <Col>
            <ProductItem />
            </Col>
            <Col>
            <ProductItem />
            </Col>
            <Col>
            <ProductItem />
            </Col>
            <Col>
            <ProductItem />
            </Col>
            <Col>
            <ProductItem />
            </Col>
            <Col>
            <ProductItem />
            </Col>
            <Col>
            <ProductItem />
            </Col>
            <Col>
            <ProductItem />
            </Col>

        </Row>
        </Container>



    )
}

export default ListOfItems
