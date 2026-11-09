import React from 'react'
import ReactDOM from 'react-dom/client'
// TODO: Import BrowserRouter from react-router-dom
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)