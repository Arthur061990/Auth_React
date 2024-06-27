import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import '../Estilos/estilo.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

export default function Registro() {

    const formRef = useRef()

    const handleSubmit = (event) =>{
        
            event.preventDefault();
            const formData = new FormData(formRef.current);
            const datos = Object.fromEntries(formData.entries());
            console.log(datos);
            axios.post("http://localhost:3000/signup", datos)
                //.then(response => console.log(response))
                //.catch(error => console.error('Error:', error));

    }

    return (
      <div className="form-container-wrapper">
        <h1>¡Registrate con nosotros!</h1>
      <div className="form-container">
      
          <Form ref={formRef} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>INGRESA TU CORREO ELECTRONICO</Form.Label>
                  <Form.Control type="email" name="email" />
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>INGRESA TU NOMBRE DE USUARIO</Form.Label>
                  <Form.Control type="text" name="username" />
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>INGRESA LA CONTRASEÑA</Form.Label>
                  <Form.Control type="password" name="password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="ACEPTO LOS TERMINOS Y CONDICIONES" />
              </Form.Group>
              <Button variant="primary" type="submit">
                  REGISTRARME
              </Button>
          </Form>
      </div>
  </div>
    )
}