import { useEffect, useState } from "react"
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // se tiene que agregar este import y luego npm npm install react-router-dom
import Dashboard from './components/pages/dashboard';
import Registro from './components/pages/registro';
import Ingreso from './components/pages/ingreso';
import Home from './components/pages/home';
import Modifica_Password from './components/pages/modificar_password';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthState from '../tools/auth.state';
import './components/Estilos/estilo.css'

function App() {

  /*const [user, setUser] = useState([])

    const fetchData = () => {
      return axios.get("http://localhost:3000/")
      .then(data => {
        console.log("Exito : "+data)
      })
      .catch(error => {
        console.log("Error  ")
      })
    }

    useEffect(()=>{
      fetchData()
    }

    )*/

  return (
    <AuthState>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/ingreso"} element={<Ingreso />}/>
            <Route path={"/registro"} element={<Registro />}/>
            <Route path={"/dashboard"} element={<Dashboard />}/>
            <Route path={"/modificar_password"} element={<Modifica_Password />}/>
          </Routes>
        </BrowserRouter>
    </AuthState>
  )
}

export default App
