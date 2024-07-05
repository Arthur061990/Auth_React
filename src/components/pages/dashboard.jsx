import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios'; // Importa Axios
import AuthContext from '../../../tools/auth.context'; 
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const usuario = "NombreUsuario"; 
    const [productos, setProductos] = useState([]);
    const authCtx = useContext(AuthContext);
    const token = authCtx.auth.token;

    const redirect = useNavigate()


    useEffect(() => {
        console.log('Token '+authCtx.auth.token);
        if (!authCtx.auth.token) {
            redirect('/') // path relativo, es decir lleva a la raiz independiente del puerto
            return;
        }

        const config = {
            headers: {
                'Authorization': 'Bearer ' + authCtx.auth.token,
                'Content-Type': 'application/json'
            }
        };

        // Función para obtener los productos desde el backend usando Axios
        const obtenerProductosDesdeBackend = async () => {
            try {
                const response = await axios.get('http://localhost:3000/obtener_productos', config);
                setProductos(response.data); 
            } catch (error) {
                console.error('Error:', error);
                
            }
        };

        obtenerProductosDesdeBackend(); 
    }, [authCtx.auth.token]); 

    function cerrar_sesion(){

        authCtx.reset()

    }

    return (
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
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;
