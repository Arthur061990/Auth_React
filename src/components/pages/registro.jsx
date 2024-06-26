import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

import axios from 'axios';

export default function Registro() {

    const formRef = useRef()

    const handleSubmit = (event) =>{
        event.preventDefault()
        //const datos = Object.fromEntries(formData)
        const formData = new FormData(formRef.current)
        console.log(formData)
        axios.post("http://localhost:3000/signup",{
            username: "artussssraaaddo",
            email: "ana@gmail.com",
            password: "pantalla"
        })

    }

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Ingresa Correo Electronico" name="email" /> 
          <Form.Text className="text-muted">
            Nunca mostraremos tu correo con nadie
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Ingresa Username" name="username" />
          <Form.Text className="text-muted">
            Nunca mostraremos tu username
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}