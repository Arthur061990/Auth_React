import { useEffect, useState } from "react"
import axios from 'axios'


function App() {

  const [user, setUser] = useState([])

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

    )

  return (
      <div className="App">
        <h1>Hola </h1>
      </div>
  )
}

export default App
