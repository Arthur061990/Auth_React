import React, { useContext } from 'react';
import { Navbar, Nav, Dropdown, DropdownButton, Container } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import AuthContext from '../../../tools/auth.context'; 
import CarritoContext from '../../../tools/carrito.context';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function Layout() {
    const usuario = "NombreUsuario"; 
    const authCtx = useContext(AuthContext);
    const { productos } = useContext(CarritoContext); // Obtener productos del contexto del carrito
    const totalProductos = productos.reduce((acc, producto) => acc + producto.cantidad, 0); // Calcular el total de productos
    const redirect = useNavigate();
    console.log("Total de productos: "+totalProductos)
    function cerrar_sesion() {
        authCtx.reset();
        redirect('/');
    }

    return (
        <div>
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/dashboard">Home</Nav.Link>
                        <Nav.Link href="/productos">Productos</Nav.Link>
                        <Nav.Link href="/contacto">Contacto</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/productos" className="d-flex align-items-center">
                            <i className="fas fa-shopping-cart"></i> {/* Ícono de carrito */}
                            <span className="badge badge-pill badge-danger ml-1">{totalProductos}</span> 
                        </Nav.Link>
                        <DropdownButton id="dropdown-basic-button" title={usuario} alignRight>
                            <Dropdown.Item href="/modificar_password">Cambiar Contraseña</Dropdown.Item>
                            <Dropdown.Item href="/pagar">Pagar</Dropdown.Item>
                            <Dropdown.Item href="#cerrar-sesion" onClick={cerrar_sesion}>Cerrar sesión</Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container fluid>
                <Outlet />
            </Container>
        </div>
    );
}

export default Layout;

