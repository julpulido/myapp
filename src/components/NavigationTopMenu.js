import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import OffcanvasBar from './OffcanvasBar'

function NavigationTopMenu() {





    return (
        <>
            

            
            
            <Navbar bg="dark" expand="sm" variant='dark' >
                <Navbar.Brand href="#">estoybuscando.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"

                        style={{ maxHeight: '50px' }}
                        navbarScroll

                    >
                        <Nav.Link href="#" disabled>
                            Donde Buscar
                        </Nav.Link>
                        <NavDropdown title="All" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Ropa</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Juguetes</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Servicios</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Mascotas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Muebles</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">etc..</NavDropdown.Item>
                        </NavDropdown>





                    </Nav>
                    <Form className="d-flex" >
                        <FormControl
                            //style={{ maxHeight: '40px' }}
                            type="search"
                            placeholder="¿Qué quieres vender?"
                            className="mr-2"
                            aria-label="Search"
                            htmlSize="60"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                    <Link to='/newitem'>            
                    <Button>Publicar</Button>
                    </Link>   
                    <Button>Login</Button>
                    
                </Navbar.Collapse>




            </Navbar>
            <Navbar bg="dark" expand="sm" variant='dark' style={{ maxHeight: '40px' }} >

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">


                    <Nav
                        className="mr-auto"
                        style={{ maxHeight: '150px' }}
                        navbarScroll
                    >
                        <OffcanvasBar />
                        <Nav.Link href="#action2">Ultimos Anuncios</Nav.Link>
                        <Nav.Link href="#">Por expirar</Nav.Link>
                        <Nav.Link href="#">Acerca</Nav.Link>
                        <Nav.Link href="#">Ayuda</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            


        </>




    )
}

export default NavigationTopMenu
