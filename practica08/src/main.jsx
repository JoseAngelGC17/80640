import React from 'react'
import ReactDOM from 'react-dom/client';
//*import App from './App.jsx'
import './index.css'
import MilFieldSet from './MiFieldSet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <MilFieldSet titulo="Dtos Perosnales" txt1="Nombre" txt2="Password"/>
  </React.StrictMode>,
)
