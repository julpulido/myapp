
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { FloatingLabel } from 'react-bootstrap'


const NewItem = () => {



    const handleSubmit = (event) => {


    };

    return (

        <div style={{ width: '35%', 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '5%' }}>
            <h1>Nueva Publicación </h1>
            <Form noValidate onSubmit={handleSubmit}>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="myinput1">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Titulo del producto"
                            defaultValue=""

                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="myinput3">
                        <Form.Label>Descripción</Form.Label>
                        <FloatingLabel label='Descripción del producto que busca' className='mb-3'>
                            <Form.Control
                                required
                                as="textarea"
                                style = {{height : '90px'}}
                                
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="myinput2">
                        <Form.Label>Rango de precio</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder=""
                            defaultValue=""
                        />

                    </Form.Group>
                </Row>

                <Row className='mb-3'>

                    <Form.Group>
                        <Form.Label>
                            Imagen de referencia
                        </Form.Label>
                        <Form.Control type='file' />
                        <Form.Text muted>
                            La imagen es opcional
                        </Form.Text>



                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Acepto los terminos y condiciones"
                            feedback="Debe aceptar los terminos antes de enviar"
                        />

                    </Form.Group>
                    <Button type="submit">Enviar</Button>
                </Row>

            </Form>


        </div>
    );
}


export default NewItem
