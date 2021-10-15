import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import image from '../assets/picture2.jpg'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import OfferModal from './OfferModal'


function ProductItem() {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Container className=" p-3 mx-auto"  >

                <Col className="mx-auto">
                    <Row >
                        <div style={{ "text-align": "center" }}><h2 >Lavadora doble</h2></div>
                    </Row>

                    <Row>
                        <Image src={image} rounded />
                    </Row>

                    <Row>
                        <p><b>Descripción:</b> Necesito una lavadora con dos entradas,
                            mejor dicho con dos huecos, una para ropa limpia y otro para ropa sucia.</p>
                    </Row>
                    <Row>
                        <p><b>Precio estimado:</b> 52.000$ </p>
                    </Row>
                    <Row>
                        <div style={{ "text-align": "center" }}>
                            <Button
                                variant="success"
                                onClick={() => setModalShow(true)}
                            >
                                Ofertar
                            </Button>
                        </div>
                        <OfferModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Row>


                </Col>



            </Container>
        </>
    )
}

export default ProductItem
