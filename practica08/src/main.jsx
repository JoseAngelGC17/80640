import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
// import MiFieldSet from './MiFieldSet.jsx'
import Formulario from './Formulario'
import './MiFieldSet.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App /> */}
    {/* <form action="">
    <MiFieldSet titulo="Datos personales" txt1="Nombre" txt2="Contraseña"></MiFieldSet>
    <MiFieldSet titulo="Datos Escolares" txt1="Carrera: " txt2="Semestre"></MiFieldSet>
    <input type="submit" value="Enviar datos"></input>
    </form> */}
    <Formulario></Formulario>
  </React.StrictMode>,
)