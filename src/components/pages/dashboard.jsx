import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios'; // Importa Axios
import AuthContext from '../../../tools/auth.context'; // Asegúrate de importar correctamente el contexto de autenticación

function Dashboard() {
    const usuario = "NombreUsuario"; // Reemplaza esto con el nombre del usuario real
    const [productos, setProductos] = useState([]);
    const authCtx = useContext(AuthContext);
    const token = authCtx.auth.token;

    useEffect(() => {
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

        // Función para obtener los productos desde el backend usando Axios
        const obtenerProductosDesdeBackend = async () => {
            try {
                const response = await axios.get('http://localhost:3000/obtener_productos', config);
                setProductos(response.data); // Actualiza el estado con los productos recibidos del backend
            } catch (error) {
                console.error('Error:', error);
                // Manejo de errores, por ejemplo mostrar un mensaje al usuario
            }
        };

        obtenerProductosDesdeBackend(); 
    }, [token]); 

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
                            <Col key={producto._id} sm={12} md={6} lg={4} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={producto.imagen} />
                                    <Card.Body>
                                        <Card.Title>{producto.nombre}</Card.Title>
                                        <Card.Text>{producto.descripcion}</Card.Text>
                                        <Card.Text>{producto.costo}</Card.Text>
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
}

export default Dashboard;
