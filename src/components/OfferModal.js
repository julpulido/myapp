import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import { FloatingLabel } from 'react-bootstrap'

function OfferModal(props) {

  const handleSubmit = (event) => {


  };


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nueva Oferta
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div style={{ width: '80%', 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '2%' }}>

          <Form noValidate onSubmit={handleSubmit}>


            <Form.Group as={Col}  controlId="myinput2">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Lavadora de dos entradas"
                defaultValue=""
              />
              <Form.Control.Feedback>Bien!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="myinput3">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Whirppool"
                defaultValue=""
              />
              <Form.Control.Feedback>Bien!</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="4" controlId="myinput2">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="10.000$"
                defaultValue=""
              />
              <Form.Control.Feedback>Bien!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="myinput3">
              <Form.Label>Descripción</Form.Label>
              <FloatingLabel label='Descripción del producto que busca' className='mb-3'>
                <Form.Control
                  required
                  as="textarea"
                  style={{ height: '90px' }}

                />
              </FloatingLabel>
            </Form.Group>



            <Form.Group>
              <Form.Label>
                Imagen de referencia
              </Form.Label>
              <Form.Control type='file' />
              <Form.Text muted>
                La imagen es opcional
              </Form.Text>
            </Form.Group>
          </Form>
        </div>


      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>Crear Oferta</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OfferModal
