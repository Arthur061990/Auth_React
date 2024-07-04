import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import '../Estilos/estilo.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
//import AuthContext from '../../../tools/auth.context';
import { useContext, useEffect } from 'react';


import axios from 'axios';
import AuthContext from '../../../tools/auth.context';
import { useNavigate } from 'react-router-dom';

export default function Ingreso() {

    const formRef = useRef()

    const authCtx = useContext( AuthContext )
    
    const redirect = useNavigate()

    const handleSubmit = (event) =>{

        const form = formRef.current;

    
        const email = form.elements.email.value;
        const password = form.elements.password.value;
  
        if (!email || !password) {
          alert('Todos los campos son obligatorios.');
          return;
        }

         
        
            event.preventDefault();
            const formData = new FormData(formRef.current);
            const datos = Object.fromEntries(formData.entries());
            console.log(datos);
            axios.post("http://localhost:3000/login", datos)
            .then(response => {
                console.log("EXITO", response.data)
                // Mostrar un mensaje al usuario de que el registro fue exitoso
                //toast.success("Usuario verificado correctamente")
    
                authCtx.set( response.data.result )
                // Si la petición fue exitosa, se redirige al usuario a la página de login después de 5 segundos
                //setTimeout(redirect, 5000, '/home')
                redirect('/dashboard')
              })
                .catch(error => console.error('Error:', error));

    }





    return (
        <div>
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>INGRESA TU CORREO ELECTRONICO</Form.Label>
                  <Form.Control type="email" name="email" />
                  
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>INGRESA LA CONTRASEÑA</Form.Label>
                  <Form.Control type="password" name="password" />
              </Form.Group>
              <div className="button-container">
              <Button variant="primary" type="submit">
                  INGRESA
              </Button>
              </div>
        </Form>
        </div>
      )
}