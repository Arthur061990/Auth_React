import React from 'react';
//import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../Estilos/dashboard.css'; // Importa el archivo CSS específico
//import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card, Dropdown, DropdownButton } from 'react-bootstrap';
//import './Perfil.css'; // Importa el archivo CSS específico

function Dashboard(){
    const usuario = "NombreUsuario"; // Reemplaza esto con el nombre del usuario real
    const productos = [
        { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: '$10', imagen: 'https://via.placeholder.com/150' },
        { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: '$20', imagen: 'https://via.placeholder.com/150' },
        // Añade más productos según sea necesario
    ];

    return (
        <div id="perfil-container">
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    
                    <DropdownButton id="dropdown-basic-button" title={usuario} alignRight>
                        <Dropdown.Item href="/modificar_password">Cambiar Contraseña</Dropdown.Item>
                        <Dropdown.Item href="#pagar">Pagar</Dropdown.Item>
                        <Dropdown.Item href="#cerrar-sesion">Cerrar sesión</Dropdown.Item>
                    </DropdownButton>
                </Navbar.Collapse>
            </Navbar>

            <div className="productos-container">
                <Container fluid>
                    <Row>
                        {productos.map(producto => (
                            <Col key={producto.id} sm={12} md={6} lg={4} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={producto.imagen} />
                                    <Card.Body>
                                        <Card.Title>{producto.nombre}</Card.Title>
                                        <Card.Text>{producto.descripcion}</Card.Text>
                                        <Card.Text>{producto.precio}</Card.Text>
                                        <Button variant="primary">Comprar</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Dashboard;
