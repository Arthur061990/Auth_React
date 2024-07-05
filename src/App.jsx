import { useEffect, useState } from "react"
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // se tiene que agregar este import y luego npm npm install react-router-dom
import Dashboard from './components/pages/dashboard';
import Registro from './components/pages/registro';
import Ingreso from './components/pages/ingreso';
import Home from './components/pages/home';
import Contacto from './components/pages/contacto';
import Productos from './components/pages/productos';
import Modifica_Password from './components/pages/modificar_password';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthState from '../tools/auth.state';
import './components/Estilos/estilo.css'
import Layout from './components/pages/layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarritoState from "../tools/carrito.state"; 

function App() {


  return (
   
    <AuthState>
      <CarritoState> 
        <BrowserRouter>
        <ToastContainer />
          <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/ingreso"} element={<Ingreso />}/>
            <Route path={"/registro"} element={<Registro />}/>
            <Route element={<Layout />}>
              <Route path={"/dashboard"} element={<Dashboard />}/>
              <Route path={"/modificar_password"} element={<Modifica_Password />}/>
              <Route path={"/contacto"} element={<Contacto/>}/>
              <Route path={"/productos"} element={<Productos/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
        </CarritoState>
    </AuthState>
  
   
    
  )
}

export default App
