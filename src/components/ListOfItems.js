import React from 'react'
import ProductItem from './ProductItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useState} from 'react'


function ListOfItems() {
    const [modalShow, setModalShow] = React.useState(false);



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
