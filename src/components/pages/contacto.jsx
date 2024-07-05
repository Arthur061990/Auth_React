import React from 'react';
import { Container, Navbar, Form, Button } from 'react-bootstrap';

const Contacto = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f7f7', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0 }}>
            <Navbar className="navbar" expand="lg" style={{ width: '100%', position: 'fixed', top: 0, zIndex: 1000, backgroundColor: '#fff', borderBottom: '1px solid #ccc' }}>
                <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
                {/* Agregar botones de navegación si es necesario */}
            </Navbar>

            <Container style={{ backgroundColor: '#fff', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', width: '300px', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '20px', fontSize: '24px' }}>Contacto</h1>

                <Form>
                    <Form.Group className="form-group">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre" />
                    </Form.Group>

                    <Form.Group className="form-group">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
                    </Form.Group>

                    <Form.Group className="form-group">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Escriba su mensaje aquí" />
                    </Form.Group>

                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Button variant="primary" type="submit" style={{ marginRight: '10px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '16px' }}>
                            Enviar Mensaje
                        </Button>
                        <Button variant="primary" href="/dashboard" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '16px' }}>
                            Regresar
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Contacto;
