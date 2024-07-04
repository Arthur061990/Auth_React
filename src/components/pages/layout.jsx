// Layout.js
import React, { useContext } from 'react';
import { Navbar, Nav, Dropdown, DropdownButton, Container } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import AuthContext from '../../../tools/auth.context'; 


function Layout() {
    const usuario = "NombreUsuario"; 
    const authCtx = useContext(AuthContext);
    const redirect = useNavigate();

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
                    <DropdownButton id="dropdown-basic-button" title={usuario} alignRight>
                        <Dropdown.Item href="/modificar_password">Cambiar Contraseña</Dropdown.Item>
                        <Dropdown.Item href="/pagar">Pagar</Dropdown.Item>
                        <Dropdown.Item href="#cerrar-sesion" onClick={cerrar_sesion}>Cerrar sesión</Dropdown.Item>
                    </DropdownButton>
                </Navbar.Collapse>
            </Navbar>

            <Container fluid>
                <Outlet />
            </Container>
        </div>
    );
}

export default Layout;
