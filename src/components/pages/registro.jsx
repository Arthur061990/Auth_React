import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef, useContext, useState, useEffect } from 'react';
import '../Estilos/estilo.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../../../tools/auth.context';
//import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";




import axios from 'axios';

export default function Registro() {

    const authCtx = useContext( AuthContext )
    const redirect = useNavigate()
    const formRef = useRef()
    const checkboxRef = useRef(null);
    
    const toastRef = useRef(); // Referencia para Toastify

    const handleSubmit = (event) =>{

      const form = formRef.current;
      const email = form.elements.email.value;
      const username = form.elements.username.value;
      const password = form.elements.password.value;

      if (!email || !username || !password) {
        alert('Todos los campos son obligatorios.');
        return;
      }

        if (!checkboxRef.current.checked) {
          alert('Debes aceptar terminos y condiciones');
            return;
          }
        
            event.preventDefault();
            const formData = new FormData(formRef.current);
            const datos = Object.fromEntries(formData.entries());
            console.log(datos);
            axios.post("http://localhost:3000/signup", datos)
                .then(response => {
                  alert('Usuario Registrado Correctamente');
                  redirect('/ingreso')
                })
                .catch(error => {
                  alert('Error al Registrar Usuario');
              });

    }

    useEffect(() => {
        if (authCtx.auth.token) {
          redirect('/dashboard')
        }
    } , [authCtx.auth.token]);

    function iniciar(){

      redirect('/ingreso')

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
            <Form.Check
              type="checkbox"
              label="ACEPTO LOS TÉRMINOS Y CONDICIONES"
              ref={checkboxRef}
            />
          </Form.Group>
          <div className="button-container">
              <Button variant="primary" type="submit">
                  REGISTRARME
              </Button>
              <span style={{ margin: '0 10px', borderRight: '1px solid #ccc', height: 'auto' }}></span>
              <Button variant="primary" onClick={iniciar}>
                  INICIAR SESION
              </Button>
              </div>
          </Form>
      </div>
  </div>
    )
}