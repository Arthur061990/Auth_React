import React, { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import AuthContext from '../../../tools/auth.context';
import '../Estilos/estilo.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Modificar_Password() {
    const formRef = useRef();
   
    
    
   

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = formRef.current;
        const formData = new FormData(form);
        const datos = Object.fromEntries(formData.entries());

        const token = authCtx.auth.token;
        if (!token) {
            console.error('Token is undefined');
            return;
        }

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        };

        axios.put("http://localhost:3000/modificar_password", datos, config)
            .then(response => {
                console.log("EXITO", response.data);
                redirect('/dashboard')
                //authCtx.set(response.data.result);
            })
            .catch(error => console.error('Error:', error));
    }


    return (
        <div>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>INGRESA NUEVA CONTRASEÑA</Form.Label>
                    <Form.Control type="password" name="password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    CAMBIAR CONTRASEÑA
                </Button>
            </Form>
        </div>
    );
}
