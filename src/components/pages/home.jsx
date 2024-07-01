import React from 'react'
import AuthContext from '../../../tools/auth.context';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';

function Home() {

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        width: '150px', // Agrega un ancho fijo para asegurar que ambos botones tengan el mismo tamaño
        textAlign: 'center',
      };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Bienvenido a nuestra página web</h1>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Link to="/registro">
            <button style={buttonStyle}>Registrarse</button>
          </Link>
          <Link to="/ingreso">
            <button style={buttonStyle}>Iniciar Sesión</button>
          </Link>
        </div>
      </div>
    );
}

export default Home