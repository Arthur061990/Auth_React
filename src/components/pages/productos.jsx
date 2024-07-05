import React, { useContext } from "react";
import CarritoContext from "../../../tools/carrito.context";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import useLocalStorage from '../../../hooks/useLocalStorage';

import '../Estilos/estilo.css'; 

function Productos() {
  

  const { productos, eliminar } = useContext(CarritoContext);

  const handleEliminarProducto = (id_producto) => {
    eliminar(id_producto); 
    console.log("ID: "+id_producto)
  };


   

  return (
    <Container fluid className="productos-container">
      <h2 className="mt-4 mb-4">Productos en tu Carrito:</h2>
      <Row>
        {productos.map((producto) => (
          <Col key={producto._id} xs={12} md={6} lg={4} xl={3}>
            <Card className="mb-4 position-relative">
              <Button
                className="btn-eliminar"
                onClick={() => handleEliminarProducto(producto._id)}
              >
                eliminar
              </Button>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
                <Card.Title>{producto.producto}</Card.Title>
                <Card.Text>Precio: ${producto.costo}</Card.Text>
                <Card.Title>Total  :{localStorage.length}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;
