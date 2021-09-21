import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
function OffcanvasBar() {

    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false) };
    const handleShow = () => { setShow(true) };

    return (
        <>
            <Nav.Link variant="primary" onClick={handleShow}>
                Categorias
            </Nav.Link>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Categorias</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav.Link href="/servicios">
                        Servicios                    
                    </Nav.Link>
                    <Nav.Link href="/musica">
                        Musica                    
                    </Nav.Link>
                    <Nav.Link href="/tecnologia">
                        Tecnologia                    
                    </Nav.Link>
                    <Nav.Link href="/deportes">
                        Deportes                    
                    </Nav.Link>
                    <Nav.Link href="/arte">
                        Arte                    
                    </Nav.Link>
                    <Nav.Link href="/mascotas">
                        Mascotas                    
                    </Nav.Link>
                    <Nav.Link href="/ropa">
                        Ropa                    
                    </Nav.Link>
                    <Nav.Link href="/chatarra">
                        Chatarra                    
                    </Nav.Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>

    )
}

export default OffcanvasBar
