
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useForm } from 'react-hook-form';



const RegisterForm = () => {



    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("Mark");

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        //var tmp = document.getElementById("myinput").value;
        //setName(event.target.myinput.value)
        //console.log(name)
        setValidated(true);
    };

    return (
        <div style={{ width: '65%', 'margin-left': 'auto' , 'margin-right': 'auto' , 'margin-top':'5%' }}>
            <h1>Registrarse </h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="myinput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Pepito"
                            defaultValue=""

                        />
                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="myinput2">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Perez"
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="myinput3">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="atSymbol">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de usuario"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Elija un nombre de usuario
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="myinput4">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control type="text" placeholder="Ciudad" required />
                        <Form.Control.Feedback type="invalid">
                            Indiquenos a que ciudad pertenece
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="myinput4">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control type="text" placeholder="Departamento" required />
                        <Form.Control.Feedback type="invalid">
                            Indiquenos a que estado pertenece
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="3" controlId="myinput4">
                        <Form.Label>Whatsapp</Form.Label>
                        <InputGroup hasValidation>

                            <InputGroup.Text id="atSymbol">(+57)</InputGroup.Text>
                            <Form.Control
                                type="numeric"
                                placeholder="3142051968"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Porporcione un numero de whatsapp valido
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Acepto los terminos y condiciones"
                        feedback="Debe aceptar los terminos antes de enviar"
                    />
                </Form.Group>
                <Button type="submit">Enviar</Button>
            </Form>
            
            <div style={{marginTop: '5%'}}>
            
            

            <h1> Logearse </h1> 
            <Button>Log in</Button> 

            </div >
        </div>
    );

}

export default RegisterForm;
